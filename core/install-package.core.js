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
 * @param {string} name - Name of package.
 * @param {string} dependencyType - Determine whether package For development or production .
 * @param {Boolean} global - Determine whether package is global or project scoped. 
 * @param {string} loadingMessage - Message that been showed on console while installing the package.
 * @param {string} successMessage - Message that will shown after installing the package successfully.
 * 
 * @summary install a package through npm
 * 
 * @output
 */
module.exports =  function installPackage (
    name,
    dependencyType,
    global,
    loadingMessage = null,
    successMessage = null
) {
    log(loadingMessage || `BK is installing ${name}...`);
    exec(`npm i ${name} -${dependencyType} ${global ? '-g' : ''}`, function(err, stdout) {
        log(chalk.italic.green(successMessage || `${name} Installed successfully`));
        log(stdout);
        if (err) log(chalk.bold.red(`Error Occur while installing ${name} package - ${err}`))
    })
}