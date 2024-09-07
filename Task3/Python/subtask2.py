def copy_file_content():
    with open('input.txt', 'r') as infile:
        content = infile.read()
    
    with open('output.txt', 'w') as outfile:
        outfile.write(content)

copy_file_content()
