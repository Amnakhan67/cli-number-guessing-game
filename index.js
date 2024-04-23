#! /usr/bin/env node
console.log(`\n\tWelcome to Amna's cli number guessing game\n\t`);
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 4 + 1);
let answer = await inquirer.prompt([
    { name: "userguessedNumber",
        type: "number",
        message: "guess a number(number limit is 1 to 5)",
    }
]);
if (answer.userguessedNumber === randomNumber) {
    console.log(`congratulations, you guessed the correct number`);
}
else {
    console.log(`Sorry! you guessed the wrong number`);
}
;
