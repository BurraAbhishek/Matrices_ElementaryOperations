# Matrices_ElementaryOperations

<img src="https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/screenshots/darkmode_4.png" alt="Homepage" title="This program comes with light and dark theme, this screenshot shows the dark theme" />

A website which allows you to play with elementary operations of matrices.

## Getting Started

Want to try this calculator? Visit [https://burraabhishek.github.io/Matrices_ElementaryOperations/](https://burraabhishek.github.io/Matrices_ElementaryOperations/)

To use this calculator locally on your device, 
1. Either download this entire repository or clone using:
```
git clone https://github.com/BurraAbhishek/Matrices_ElementaryOperations.git
```
2. Next, open the index.html file in your preferred browser. This program works well across all modern browsers, including Internet Explorer 8+.

NOTE: This repository uses [prettier](https://prettier.io) for code formatting.

## Usage

### Step - 1

<img src="https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/screenshots/darkmode_1.png" alt="Step - 1" title="This program comes with light and dark theme, this screenshot shows the dark theme" />
Enter the number of rows and columns of the matrix. 

Alternatively, you can import saved operations directly using the upload button. Skip step 2 if you choose this option.

### Step - 2

<img src="https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/screenshots/darkmode_2.png" alt="Step - 2 Initial" title="This program comes with light and dark theme, this screenshot shows the dark theme" />
Enter the values in each cell. Blank cells default to 0. A sample setup is as follows:

<img src="https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/screenshots/darkmode_3.png" alt="Step - 2 Initial" title="This program comes with light and dark theme, this screenshot shows the dark theme" />
NOTE: In later releases, all buttons are wide.

### Step - 3

<img src="https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/screenshots/darkmode_4.png" alt="Setup is ready" title="This program comes with light and dark theme, this screenshot shows the dark theme" />

Use `Select an operation` to choose and perform elementary operations on your matrix.

Want to save your progress? Click `Save work to device`.

## Privacy Policy

1. All operations are performed in the browser. No information is transmitted over the Internet while you're using this app.
2. This application uses browser storage (DOM storage) to store user preferences on light mode and dark mode.
3. When you're saving your progress, it downloads a JavaScript file. This file contains an array which stores the timestamp of saving the file and the saved calculations. You can only upload these JavaScript files to load your calculation history. This file is described in the following section:

### The saved calculation history
The calculation history JavaScript file is as follows (The downloaded file is not indented, and everything is in one line):
```
var matrixoperations_history_file = {
    "timesaved": // Timestamp when the file is saved,
    "history_data": [
        {
            "description": //Description of the operation,
            "matrix": [
                // The saved state of your matrix
            ]
        }
        ...
    ]
};
```
- [This file](https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/sample_saved_operations/matrix_elementaryoperations_1630047095554.js) is an example of the file which will be downloaded when you're saving calculation history.
- [This file](https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/sample_saved_operations/matrix_elementaryoperations_1630047095554.pretty.js) is a more readable version of the above file.
- [This file](https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/sample_saved_operations/matrix_elementaryoperations_1630047095554.json) is the JSON version of the above file: remove `var matrixoperations_history_file = ` at the beginning and `;` at the end of the downloaded file, remove trailing commas if any, and save it as a JSON file.

## Testing
This site is tested using [webhint.io](https://webhint.io) for improving the following:
- Accessibility
- Cross-browser compatibility
- Performance
- Security

The test results depend on two factors:
- Site code
- Server configuration

## License
The source code is licensed under the terms of the [MIT License](https://github.com/BurraAbhishek/Matrices_ElementaryOperations/blob/main/LICENSE).

The icons and images used in this web application are licensed under the [Creative Commons CC0 License](https://tldrlegal.com/license/creative-commons-cc0-1.0-universal).
