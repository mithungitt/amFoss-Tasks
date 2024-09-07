lines = File.readlines('input.txt')
n_line = lines.find { |line| line.start_with?('n') }
n = n_line.split('=').last.to_i
n += 1 if n.even?

pattern = ""

(1..n).step(2) { |i| pattern << "#{' ' * ((n - i) / 2)}#{'*' * i}\n" }
(n - 2).step(1, -2) { |i| pattern << "#{' ' * ((n - i) / 2)}#{'*' * i}\n" }

File.write('output.txt', pattern)
