#include <stdio.h>

int main() {
    const char *inputPath = "/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt";
    const char *outputPath = "/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt";

    FILE *inputFile = fopen(inputPath, "r");
    if (!inputFile) {
        perror("Error opening input file");
        return 1;
    }

    FILE *outputFile = fopen(outputPath, "w");
    if (!outputFile) {
        perror("Error opening output file");
        fclose(inputFile);
        return 1;
    }

    char buffer[1024];
    while (fgets(buffer, sizeof(buffer), inputFile)) {
        fputs(buffer, outputFile);
    }

    fclose(inputFile);
    fclose(outputFile);
    return 0;
}
