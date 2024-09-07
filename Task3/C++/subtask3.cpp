#include <iostream>

int main() {
    int n;

    std::cout << "Enter an odd number: ";
    std::cin >> n;

    if (n % 2 == 0) {
        std::cerr << "The number must be odd.\n";
        return 1;
    }

    for (int i = 1; i <= n; i += 2) {
        std::cout << std::string((n - i) / 2, ' ') << std::string(i, '*') << std::endl;
    }

    for (int i = n - 2; i > 0; i -= 2) {
        std::cout << std::string((n - i) / 2, ' ') << std::string(i, '*') << std::endl;
    }

    return 0;
}
