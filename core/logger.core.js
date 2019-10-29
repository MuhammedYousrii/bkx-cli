const chalk = require('chalk');

const messages = {
    success: 'Done! File created at',
    error: 'Warning Dir is already existing'
}

function success (filePath, message = messages.success) {
    console.log(chalk.white.bgGreen.bold(`${message}: ${filePath}`));
}

function info (filePath, message) {
    console.log(chalk.blue.bold(`On ${filePath}, ${message}`))
}

function error () {
    console.log(chalk.red.bold())
}

function warn(filePath = process.cwd(), customMessage = null) {
    console.log(chalk.yellow.bold(customMessage ? customMessage: `${messages.error} => ${filePath}`));
}

module.exports = {
    success,
    error,
    warn,
    info
}