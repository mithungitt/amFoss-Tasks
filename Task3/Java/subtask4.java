import java.io.*;

public class subtask4 {
    public static void main(String[] args) {
        int n = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("n=")) {
                    n = Integer.parseInt(line.substring(2).trim());
                    if (n % 2 == 0) n++;
                    break;
                }
            }
        } catch (IOException | NumberFormatException e) {
            System.err.println("Error reading input file.");
            return;
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            for (int i = 1; i <= n; i += 2) {
                writer.write(" ".repeat((n - i) / 2) + "*".repeat(i));
                writer.newLine();
            }
            for (int i = n - 2; i > 0; i -= 2) {
                writer.write(" ".repeat((n - i) / 2) + "*".repeat(i));
                writer.newLine();
            }
        } catch (IOException e) {
            System.err.println("Error writing to output file.");
        }
    }
}
