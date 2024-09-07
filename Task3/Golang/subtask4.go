package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    file, err := os.Open("input.txt")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file.Close()

    var number int
    scanner := bufio.NewScanner(file)

    for scanner.Scan() {
        line := scanner.Text()
        if strings.HasPrefix(line, "n=") {
            numStr := strings.TrimPrefix(line, "n=")
            number, _ = strconv.Atoi(numStr)
            if number%2 == 0 {
                number++ // Ensure number is odd
            }
            break
        }
    }

    if err := scanner.Err(); err != nil {
        fmt.Println("Error reading file:", err)
        return
    }

    mid := (number + 1) / 2
    var result strings.Builder

    for i := 1; i <= mid; i++ {
        result.WriteString(strings.Repeat(" ", mid-i))
        result.WriteString(strings.Repeat("*", 2*i-1))
        result.WriteString("\n")
    }

    for i := mid - 1; i >= 1; i-- {
        result.WriteString(strings.Repeat(" ", mid-i))
        result.WriteString(strings.Repeat("*", 2*i-1))
        result.WriteString("\n")
    }

    err = os.WriteFile("output.txt", []byte(result.String()), 0644)
    if err != nil {
        fmt.Println("Error writing file:", err)
    }
}
