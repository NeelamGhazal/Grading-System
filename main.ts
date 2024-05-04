#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.greenBright.bold("\t\t     <<<<<===========================>>>>>")
);
console.log(chalk.greenBright.bold("\t\t\t   Welcome to Grading System "));
console.log(
  chalk.greenBright.bold("\t\t     <<<<<===========================>>>>>\n")
);

let grading = [];
let answer = await inquirer.prompt([
  {
    type: "input",
    name: "obtainedMarks",
    message: chalk.redBright("Enter your obtained marks:"),
  },
  {
    type: "input",
    name: "maxMarks",
    message: chalk.redBright("Enter your max marks:"),
  },
]);
grading.push(+answer.obtainedMarks);
grading.push(+answer.maxMarks);

let obtainedMarks = grading[0];
let maxMarks = grading[1];

let percentage = (obtainedMarks / maxMarks) * 100;
console.log(
  chalk.magentaBright("\n\t\t\t  Percentage:", percentage.toFixed(2) + "%")
);

if (percentage >= 90 && percentage <= 100) {
  console.log("Your Grade is A1.");
} else if (percentage >= 80 && percentage <= 89) {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   Your Grade is A+."));
} else if (percentage >= 70 && percentage <= 79) {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   Your Grade is A."));
} else if (percentage >= 60 && percentage <= 69) {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   Your Grade is B."));
} else if (percentage >= 50 && percentage <= 59) {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   Your Grade is C."));
} else if (percentage >= 40 && percentage <= 49) {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   You are Passed."));
} else {
  console.log(chalk.cyanBright.italic.bold("\t\t\t   You are Fail"));
}
