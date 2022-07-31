const chalk = require("chalk");

console.log(chalk.bgRed(" BG RED "));
console.log(chalk.white(" TEXT WHITE "));
console.log(chalk.bgRed.white(" BG RED / TEXT WHITE "));

console.log("\n");

console.log(chalk.bgBlack(" BG BLACK "));
console.log(chalk.red(" TEXT RED "));
console.log(chalk.bgBlack.red(" BG BLACK / TEXT RED "));

console.log("\n");
