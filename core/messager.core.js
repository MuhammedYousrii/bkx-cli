const chalk = require('chalk');

const messages = {
    success: 'Done! File created at'
}

function success (filePath) {
    console.log(chalk.white.bgGreen.bold(`${messages.success}: ${filePath}`))
}

function error () {

}

module.exports = {
    success,
    error
}