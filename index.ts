#! /usr/bin/env node


import inquirer from "inquirer"
// 01 computer will generate a random number  Done
// 02 user input a number                     Done
// 03 compare the number                      Done
// 04 print the result                        Done
const randomNumber = Math.floor(Math.random()* 6 + 1)
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },

]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("You guessed it right");
} else {
    console.log("You guessed it wrong");
}


console.log(answer);

