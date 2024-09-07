begin
  input_string = File.read('input.txt')
  File.write('output.txt', input_string)
  puts "Content successfully written to output.txt."
rescue Errno::ENOENT => e
  puts "Error: #{e.message}. Ensure that 'input.txt' exists in the correct directory."
rescue Errno::EACCES => e
  puts "Error: #{e.message}. Check your file permissions."
rescue StandardError => e
  puts "An unexpected error occurred: #{e.message}"
end
