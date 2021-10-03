// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username.",
        default: "lindsayreiner"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
        default: "lindsayreiner@hey.com"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of this application?",
        default: "test"
    },
    {
        type: "input",
        name: "description",
        message: "Write a 2-3 sentence introduction to your application.",
        default: "test"
    },
    {
        type: "input",
        name: "install",
        message:
            "What necessary dependencies must be installed to run this application?",
        default: "test"

    },
    {
        type: "input",
        name: "usage",
        message:
            "Provide steps for how to use the application once the user has installed it.",
        default: "Run in terminal"
    },
    {
        type: "list",
        name: "license",
        message:
            "Which of the following best describes your situation? We will pick a license that is right for you.",
        choices: ["ISC", "MIT", "GNU GPLv3"],
        default: "MIT"
    },
    {
        type: "input",
        name: "contributors",
        message:
            'Provide the names of anyone who has contributed to this project, or write "Sole Author."',
        default: "Sole Author"
    },
    {
        type: "input",
        name: "tests",
        message: "What is the command used to run tests on this application?",
        default: "node index.js"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}README.md`, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("README.md answers saved successfully.");
        }
    });
}

async function questionPrompt() {
    const answers = await prompt(questions)
    console.log(answers);
    const fileName = `${answers.title}`;

    const data = await generateMarkdown(answers);

    writeToFile(fileName, data);
};

// TODO: Create a function to initialize app
function init() {
    questionPrompt();
}

// Function call to initialize app
init();

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// ); JSON.stringify(answers, null, 2);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
