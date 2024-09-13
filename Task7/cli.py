import click
from utils import process_single_file, process_batch

@click.command()
@click.option('-l', '--language', default='eng', help='Filter subtitles by language.')
@click.option('-o', '--output', default='.', help='Specify the output folder for subtitles.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode for all movies in a directory.')
@click.argument('file_or_directory')
def main(language, output, match_by_hash, batch_download, file_or_directory):
    if batch_download:
        click.echo(f'Batch mode enabled. Processing directory: {file_or_directory}')
        process_batch(file_or_directory, language, output, match_by_hash)
    else:
        click.echo(f'Processing single file: {file_or_directory}')
        process_single_file(file_or_directory, language, output, match_by_hash)

if __name__ == '__main__':
    main()
