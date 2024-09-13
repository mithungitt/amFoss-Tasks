# Task 3: Solving Problems Across Languages

## Introduction

This README documents my journey in solving coding problems across various programming languages. It highlights the logic used in each solution and the difficulties faced while finding solutions. The languages covered are Elixir, Go, Haskell, and Rust.

## 1. Elixir: Generating a Diamond Pattern
### Problem

Write a program that reads a number from a file and generates a diamond pattern of asterisks in another file.
Logic Used

- Read the File: Open and read the content of the input file.
- Extract the Number: Identify and extract the number from the file content. The number may appear on any line, so locate the line that starts with n=.
- Adjust the Number: Ensure the number is odd. If it's even, increment it by 1.
- Generate the Diamond Pattern: Construct the diamond pattern by    generating the top and bottom halves based on the number.
- Write the Output: Save the generated pattern to an output file.

### Difficulties Faced

- Handling the possibility of the number appearing on any line.
- Generating a symmetrical diamond pattern with string manipulation functions.

## 2. Go: Reading and Writing Files
## Difficulties
- Keeping the code simple while ensuring correct file operations without complex error handling.

## 3. Haskell: Reading and Writing Files
### Problem

- Write a program that reads all lines from a file named input.txt and - writes them to output.txt.
### Logic Used

- Read the File: and writing the pattern into the ouput.txt file using normal standard style of codes. Pretty easy compared to rust.

### Difficulties Faced

- Ensuring simplicity while dealing with Haskell's file I/O functions and avoiding unnecessary complexity.

## 4. Rust: Reading and Writing Files
### Problem

- Write a program that reads all content from input.txt and writes it to output.txt. As each time some or the other error was being thrown as the code wasnt able to identify the number from file.
### Logic Used

- Read the File: Use Rust’s standard library to read the file content.
- Mostly a skill issue due to lack of awareness in the new language
- Write the Output: Use Rust’s standard library to write the content to a new file.

### Difficulties Faced

- Understanding Rust’s approach to file operations and managing errors without complex code handling.

## 5. Python: Reading and Writing Files
### Problem
-  Since most of python is almost completely familiarised this was the section was the easiest to cruize through

### Logic Used

- I created a function to generate the diamond pattern. I used two loops: one for the upper half (including the middle) and one for the lower half of the diamond. For the spaces, I calculated the amount based on the difference between the total width and the current line width. This way, the pattern is centered properly.

- I used string multiplication in Python to create the correct number of spaces and stars. By carefully calculating the number of spaces needed before and after the stars, I ensured that the pattern was centered properly. 

## 6. Javascript: Reading and Writing Files
### Problem

- Unable to transfer pattern after reading from input.txt to output.txt
### Logic Used

- Upper Half:

    - Loop from 1 to n with a step of 2 to ensure only odd numbers are used.
    - Calculate the number of leading spaces with ' '.repeat((n - i) / 2).(similar to python)
   - Create the line with stars using '*'.repeat(i).
    - Collect each line in the lines array.

- Lower Half:

    - Loop from n - 2 to 1 in decrements of 2 to generate the descending part of the diamond.
    - Similar calculations for spaces and stars as in the upper half.

## 7. Java: Reading and Writing Files
### Problem

- Java being a familiar language it wasnt hard to get a grasp over the working
### Logic Used

- same as javascript

## 8. Ruby: Reading and Writing Files
### Logic Used
- Same as Python in solving the diamond proble. File reading was also smooth

## 9. C and C++: Reading and Writing Files
### Problem
- Identifying the number from the input.txt
### Solution

- had to use entire path where the file was located even though it was in same directory
- mostly an issue in the setting of the IDE 

## Conclusion

This exploration of file handling and basic programming logic across different languages has been a valuable learning experience. Each language offers unique ways to handle file I/O and process data, presenting different challenges and many solutions for the same question or language itself. 

---