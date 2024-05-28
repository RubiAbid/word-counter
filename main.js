#!/usr/bin/env node
// The shebang line tells the operating system to use the Node.js interpreter to run this script.
import inquirer from "inquirer"; // Importing the 'inquirer' module which is used to create interactive command-line prompts.\
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter a sentence to count words",
});
// Trim any leading/trailing whitespace from the user's sentence and split it into an array of words.
const words = answer.sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`); // 'words.length' gives the count of elements (words) in the array.
