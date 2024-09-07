#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream inputFile("/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt");
    std::ofstream outputFile("/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt");

    if (!inputFile) {
        std::cerr << "Error opening input file\n";
        return 1;
    }

    if (!outputFile) {
        std::cerr << "Error opening output file\n";
        return 1;
    }

    int n = 0;
    std::string line;
    bool found = false;

    while (std::getline(inputFile, line)) {
        if (line.find("n=") == 0) {
            try {
                n = std::stoi(line.substr(2));
                found = true;
                break;
            } catch (const std::invalid_argument&) {
                std::cerr << "Invalid number format in input file\n";
                return 1;
            }
        }
    }

    if (!found || n <= 0) {
        std::cerr << "Valid line starting with 'n=' not found or invalid number\n";
        return 1;
    }

    if (n % 2 == 0) n++; // im making n the next odd number instead of throwing an error

    for (int i = 1; i <= n; i += 2) {
        outputFile << std::string((n - i) / 2, ' ') << std::string(i, '*') << '\n';
    }
    for (int i = n - 2; i > 0; i -= 2) {
        outputFile << std::string((n - i) / 2, ' ') << std::string(i, '*') << '\n';
    }

    inputFile.close();
    outputFile.close();

    return 0;
}
