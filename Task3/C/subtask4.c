#include <stdio.h>
#include <string.h>

int main() {
    const char *inputPath = "/home/mithun-krishna/Documents/amFossTasks/Task3/input.txt";
    const char *outputPath = "/home/mithun-krishna/Documents/amFossTasks/Task3/output.txt";

    FILE *inputFile = fopen(inputPath, "r");
    if (!inputFile) {
        perror("Error opening input file");
        return 1;
    }

    int n = 0;
    char buffer[256];

    while (fgets(buffer, sizeof(buffer), inputFile)) {
        if (sscanf(buffer, "n = %d", &n) == 1) {
            if (n % 2 == 0) n++;
            break;
        }
    }

    fclose(inputFile);

    if (n == 0) {
        fprintf(stderr, "Number not found in input file\n");
        return 1;
    }

    FILE *outputFile = fopen(outputPath, "w");
    if (!outputFile) {
        perror("Error opening output file");
        return 1;
    }

    for (int i = 1; i <= n; i += 2) {
        for (int j = 0; j < (n - i) / 2; j++) fputc(' ', outputFile);
        for (int j = 0; j < i; j++) fputc('*', outputFile);
        fputc('\n', outputFile);
    }
    for (int i = n - 2; i > 0; i -= 2) {
        for (int j = 0; j < (n - i) / 2; j++) fputc(' ', outputFile);
        for (int j = 0; j < i; j++) fputc('*', outputFile);
        fputc('\n', outputFile);
    }

    fclose(outputFile);
    return 0;
}
