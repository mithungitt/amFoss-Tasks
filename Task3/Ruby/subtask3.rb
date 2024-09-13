# Function to extract number from the input file
def extract_number(filename)
  File.foreach(filename) do |line|
    return line.split('=')[1].strip.to_i if line.start_with?('n=')
  end
  raise "Number not found in #{filename}"
end


def diamond_pattern(n)
  return '' if n < 1 || n.even?

  pattern = ""

  # Top half
  (1..n).step(2) do |i|
    pattern += ' ' * ((n - i) / 2) + '*' * i + "\n"
  end

  # Bottom half
  (n-2).step(1, -2) do |i|
    pattern += ' ' * ((n - i) / 2) + '*' * i + "\n"
  end

  pattern
end

number = extract_number('input.txt')

File.open('output.txt', 'w') do |file|
  file.write(diamond_pattern(number))
end
