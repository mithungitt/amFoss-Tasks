with open('input.txt', 'r') as file:
    n_line = next(line for line in file if line.startswith('n'))
n = int(n_line.split('=')[1].strip())
if n % 2 == 0:
    n += 1

pattern = ""

for i in range(1, n + 1, 2):
    pattern += ' ' * ((n - i) // 2) + '*' * i + '\n'
for i in range(n - 2, 0, -2):
    pattern += ' ' * ((n - i) // 2) + '*' * i + '\n'

with open('output.txt', 'w') as file:
    file.write(pattern)
