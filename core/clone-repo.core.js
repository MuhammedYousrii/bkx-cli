/**
 * @module
 * @fileOverview
 * @author  
 * @version 1.0.0
 * @requires child_process
 * @requires chalk
 */
const { exec } = require('child_process');
const { log } = console;
const chalk = require('chalk');
/**
 * @function installPackage
 * @public
 * @param {string} name - Name of repository.
 * 
 * @summary Clone repo from github to local directory
 * 
 * @output
 */
module.exports =  function cloneRepo (
    dir
) {
    log(`BK is cloning js-lib-starter-kit to directory ${dir}...`);
    exec(`git clone git@github.com:MuhammedYousrii/js-lib-starter-kit.git ${dir}`, function(err, stdout) {
        log(chalk.italic.green(`cloned to ${dir} successfully`));
        log(stdout);
        if (err) log(chalk.bold.red(`Error Occur while cloning to ${dir} - ${err}`))
    })
}