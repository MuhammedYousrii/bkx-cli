const chalk = require('chalk').default;

module.exports =  {
    warning: chalk.bold.yellow,
    error: chalk.bold.red,
    success: chalk.italic.green,
    info: chalk.dim.blue,
    normal: chalk.white
}