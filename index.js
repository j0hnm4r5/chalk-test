const chalk = require("chalk");

console.log(chalk.bgRed(" BG RED "));
console.log(chalk.blue(" TEXT BLUE "));
console.log(chalk.bgRed.blue(" BG RED / TEXT BLUE "));

console.log("\n");

console.log(chalk.bgBlack(" BG BLACK "));
console.log(chalk.red(" TEXT RED "));
console.log(chalk.bgBlack.red(" BG BLACK / TEXT RED "));

console.log("\n");
