* At the root of the application, use VS Code or the command line to create a file named `.gitignore`. This file will store a list of files or folders that may end up in the application but that we don't want to keep on GitHub.

* Add the following line to the newly created `.gitignore` file:

  ```
  .DS_Store
  ```

* The `.DS_Store` file is a file unique to macOS that the operating system automatically creates to internally store a directory's attributes, so Windows users have likely not encountered this before. This file has no bearing on the actual project code, so it's best to always add it to the `.gitignore` file to ensure that it never makes it to the actual GitHub repository.


# Node.js Challenge: Professional README Generator

## Description

This project called for me to create a command-line application that dynamically generates a professional README.md file from a user's input.

This project meets the following acceptance criteria:

- GIVEN a command-line application that accepts user input, WHEN I am prompted for information about my application repository, THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

- WHEN I enter my project title, THEN this is displayed as the title of the README

- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions, THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

- WHEN I choose a license for my application from a list of options, THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

- WHEN I enter my GitHub username, THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

- WHEN I enter my email address, THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

- WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Inquirer: https://www.npmjs.com/package/inquirer/v/8.2.4
FullStack Blog: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.