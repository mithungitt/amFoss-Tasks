import os
import imdb
import hashlib
import struct
from bs4 import BeautifulSoup
import requests
import click

# Function to get IMDb ID based on movie filename
def get_imdb_id(filename):
    ia = imdb.IMDb()
    movie_name = os.path.basename(filename).replace('.mp4', '')
    results = ia.search_movie(movie_name)
    if results:
        return results[0].movieID
    return None

# Function to compute the OpenSubtitles movie hash
def compute_movie_hash(filename):
    longlongformat = '<q'  # little-endian long long
    bytesize = struct.calcsize(longlongformat)

    with open(filename, "rb") as f:
        filesize = os.path.getsize(filename)
        hash = filesize

        if filesize < 65536 * 2:
            return None  # file is too small to compute a valid hash

        # Read 64 KB from the start of the file
        for _ in range(65536 // bytesize):
            buffer = f.read(bytesize)
            (l_value,) = struct.unpack(longlongformat, buffer)
            hash += l_value

        # Read 64 KB from the end of the file
        f.seek(-65536, os.SEEK_END)
        for _ in range(65536 // bytesize):
            buffer = f.read(bytesize)
            (l_value,) = struct.unpack(longlongformat, buffer)
            hash += l_value

        hash &= 0xFFFFFFFFFFFFFFFF
        return "%016x" % hash

# Function to get the file size of the movie
def get_file_size(filename):
    return os.path.getsize(filename)

# Scrape subtitles from OpenSubtitles.org
def scrape_subtitles(imdb_id: str = None, language: str = 'eng', file_hash: str = None):
    if imdb_id:
        url = f"https://www.opensubtitles.org/en/search/sublanguageid-{language}/imdbid-{imdb_id}"
    elif file_hash:
        url = f"https://www.opensubtitles.org/en/search/sublanguageid-{language}/moviehash-{file_hash}"
    else:
        return []

    try:
        response = requests.get(url)
        if response.status_code != 200:
            print(f"Failed to fetch subtitles from OpenSubtitles (status code {response.status_code})")
            return []

        soup = BeautifulSoup(response.content, 'html.parser')
        subtitles = []

        # Looping through the rows containing subtitle info
        for row in soup.find_all('tr', class_='change'):
            title = row.find('a', class_='bnone')
            download_link_element = row.find('a', title='Download')

            if title and download_link_element:
                download_link = download_link_element['href']
                subtitles.append((title.text.strip(), download_link))
            else:
                print("Subtitle without a download link or title encountered, skipping...")

        # Sort subtitles by length (or any other criteria you choose)
        subtitles = sorted(subtitles, key=lambda x: len(x[0]), reverse=True)
        return subtitles

    except Exception as e:
        print(f"An error occurred while scraping subtitles: {e}")
        return []

# Function to download the selected subtitle
def download_subtitle(subtitle_url, output_folder):
    response = requests.get(f'https://www.opensubtitles.org{subtitle_url}')
    file_path = os.path.join(output_folder, 'subtitle.srt')
    with open(file_path, 'wb') as f:
        f.write(response.content)
    return file_path

# Function to choose a subtitle from the list
def choose_subtitle(subtitles):
    for i, sub in enumerate(subtitles):
        click.echo(f"{i+1}: {sub[0]}")
    choice = click.prompt('Enter the number of the subtitle to download', type=int)
    return subtitles[choice-1]

# Process a single .mp4 file, find its IMDb ID, scrape subtitles, and download the desired one
def process_single_file(filename, language, output, match_by_hash):
    imdb_id = get_imdb_id(filename)
    if not imdb_id and not match_by_hash:
        click.echo("Could not find IMDb ID or hash for the movie.")
        return

    file_hash = compute_movie_hash(filename) if match_by_hash else None

    subtitles = scrape_subtitles(imdb_id=imdb_id, language=language, file_hash=file_hash)
    if subtitles:
        chosen_sub = choose_subtitle(subtitles)
        downloaded_path = download_subtitle(chosen_sub[1], output)
        click.echo(f"Subtitle downloaded to {downloaded_path}")
    else:
        click.echo("No subtitles found.")

# Batch mode: process all movies in a directory
def process_batch(directory, language, output, match_by_hash):
    for filename in os.listdir(directory):
        if filename.endswith('.mp4'):
            full_path = os.path.join(directory, filename)
            process_single_file(full_path, language, output, match_by_hash)
