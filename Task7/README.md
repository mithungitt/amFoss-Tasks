
# Task 7- Subtitle Finder CLI

## Overview

Welcome to the Subtitle Finder CLI project! This tool helps you find and download subtitles for your movies directly from the command line. Whether you need subtitles for a single file or want to process an entire directory of movies, this CLI application has you covered.

## Project Logic

### 1. **Getting IMDb ID**

To find subtitles for a movie, we first need to identify the movie. The application extracts the movie name from the provided filename (assuming the file is in `.mp4` format) and searches for the IMDb ID using the `IMDbPY` library. This ID helps us locate the correct subtitles.

### 2. **Computing Movie Hash**

If we choose to match subtitles by hash, the application computes a hash of the movie file. This hash is a unique identifier for the file's content, used by OpenSubtitles to find matching subtitles. The hash is computed by reading 64 KB from both the beginning and end of the file and summing up the values.

### 3. **Scraping Subtitles**

The core of the application involves scraping subtitles from OpenSubtitles. Depending on the parameters provided (`IMDb ID`, `file hash`, or `language`), the application sends a request to OpenSubtitles and parses the results using BeautifulSoup. This helps us retrieve a list of available subtitles, sorted by the number of downloads.

### 4. **Downloading Subtitles**

Once the user selects a subtitle from the list, the application downloads it and saves it to the specified output folder. This involves making another HTTP request to fetch the subtitle file.

### 5. **Batch Mode**

For batch processing, the application can handle multiple `.mp4` files in a directory. It automatically processes each file, finds subtitles, and downloads them without further user intervention.

## Important Functions

### **`get_imdb_id(filename)`**

This function extracts the movie name from the provided filename and uses the IMDbPY library to search for the movie on IMDb. It retrieves the IMDb ID, which is used for subtitle searches.

**Usage Example:**

```python
imdb_id = get_imdb_id('movie.mp4')
```

### **`compute_movie_hash(filename)`**

This function computes a hash for the movie file based on its content. It reads 64 KB from both the start and end of the file and calculates a unique hash. This hash helps in finding subtitles on OpenSubtitles when the IMDb ID is not available.

**Usage Example:**

```python
file_hash = compute_movie_hash('movie.mp4')
```

### **`get_file_size(filename)`**

This function returns the size of the movie file in bytes. It is used to filter subtitles based on file size if needed.

**Usage Example:**

```python
file_size = get_file_size('movie.mp4')
```

### **`scrape_subtitles(imdb_id, language, file_hash)`**

This function scrapes subtitles from OpenSubtitles based on the IMDb ID or file hash. It sends a request to OpenSubtitles and parses the results to get a list of available subtitles.

**Usage Example:**

```python
subtitles = scrape_subtitles(imdb_id='1234567', language='eng')
```

### **`download_subtitle(subtitle_url, output_folder)`**

This function downloads the selected subtitle file from OpenSubtitles and saves it to the specified output folder.

**Usage Example:**

```python
downloaded_path = download_subtitle('/path/to/subtitle.srt', './subtitles')
```

### **`choose_subtitle(subtitles)`**

This function displays a list of available subtitles to the user and prompts them to select one. It returns the chosen subtitle for downloading.

**Usage Example:**

```python
chosen_sub = choose_subtitle(subtitles)
```

### **`process_single_file(filename, language, output, match_by_hash)`**

This function processes a single movie file, finds its IMDb ID or hash, scrapes subtitles, and downloads the chosen subtitle.

**Usage Example:**

```python
process_single_file('movie.mp4', language='eng', output='./subtitles', match_by_hash=True)
```

### **`process_batch(directory, language, output, match_by_hash)`**

This function processes all \`.mp4\` files in a specified directory. It finds subtitles for each movie and downloads them.

**Usage Example:**

```python
process_batch('./movies', language='eng', output='./subtitles', match_by_hash=True)
```

## Information Sources

- **IMDbPY Documentation**: Used for searching and retrieving IMDb IDs. [IMDbPY Documentation](https://imdbpy.readthedocs.io/en/latest/)
- **OpenSubtitles**: Subtitle data is scraped from OpenSubtitles using their search URL patterns.
- **BeautifulSoup Documentation**: Used for parsing HTML data to extract subtitle information. [BeautifulSoup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- **Python Documentation**: For handling file operations and binary data. [Python Documentation](https://docs.python.org/3/)
- **YouTube**
- **Chatgpt for error checking**

## Challenges and Solutions

### 1. **Finding Accurate Subtitles**

One of the main challenges was ensuring the accuracy of subtitles, especially when using hash-based searches. Sometimes, subtitles weren’t found due to variations in movie naming conventions or incomplete hash matching.

**Solution**: By implementing both IMDb ID and hash-based searches, the application maximizes the chances of finding the right subtitles. If one method fails, the other might succeed.

### 2. **Processing Large Files**

Computing hashes for large movie files was slow and uses lot of space and ram. Sometimes it will not load and the terminal freezes.

**Solution**: Optimized the hash calculation by limiting the size of the data read from the file and ensuring the operation is efficient. Also, give clear feedback during running of code to understand the issues.

### 3. **User Input Validation**

Handling user input for subtitle selection was tricky, especially ensuring that invalid inputs don’t break the application.

**Solution**: Implemented input validation and error handling in the `choose_subtitle` function to ensure the application only accepts valid choices and provides appropriate feedback if the input is out of range.

### 4. **Other Issues**

Although the reason is still unsure, it has been seen the movie provided in task repository fails to provide subtitles but other movies give expected output in subtitles folder.

**Solution**: During the checking of the availability of subtitles for `planet 9 from outer space` the movie title and subtitles were not found. Leading to believe the subtitles do not exist and the code is giving the right output.

## Usage

### Setting Up

1. **Create and Activate Virtual Environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

2. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

### Running the CLI

- **Find subtitles for a single movie file:**

  ```bash
  python cli.py -l eng -o ./subtitles -h movie.mp4
  ```

- **Batch process all movies in a directory:**

  ```bash
  python cli.py -l eng -o ./subtitles -b ./movies
  ```

## Conclusion

This CLI tool is a practical way to manage and download subtitles for movies. It demonstrates a blend of different technologies and problem-solving strategies, making it a useful project for anyone interested in Python development and command-line interfaces.

---
