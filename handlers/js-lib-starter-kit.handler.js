const fs = require('fs');
const cloneRepo = require('../core/clone-repo.core');
const {exec} = require('child_process');
const {log} = require('console');
const {info, success} = require('../core/logger.core');

/**
 * 
 * @summary Create dir
 * @param {string} dir - Directory where CLI will clone the JS-lib-starter-kit.
 */
module.exports = function(dir) {
    cloneRepo(
        dir, 
        function() {
            info(dir, 'Installing npm packages...');
            // INSTALLING NPM PACKAGES
            exec(`cd ${dir} && npm i`, function(err, stdout) {
                if (err) return console.log('Error happen while installing packages: ', err);
                success(dir, 'Npm packages installed successfully');
                info(dir, 'Please wait, preparing starter-kit for you');
                
                // RUN PREPARING PROCESS
                exec(`cd ${dir} && node prepare-starter-kit.js --name ${dir}`, (err, stdout) => {
                    if (err) return console.error('Error happen while preparing starter-kit', err);
                    success(dir, 'Go and write your awesome lib');
                });
            });

        });
}