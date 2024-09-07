#include <fstream>
#include <iostream>
#include <string>

int main() {
    std::ifstream inputFile("/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt");
    std::ofstream outputFile("/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt");

    if (!inputFile.is_open()) {
        std::cerr << "Error opening input file\n";
        return 1;
    }

    if (!outputFile.is_open()) {
        std::cerr << "Error opening output file\n";
        return 1;
    }

    std::string line;
    while (std::getline(inputFile, line)) {
        outputFile << line << std::endl;
    }

    inputFile.close();
    outputFile.close();

    return 0;
}
