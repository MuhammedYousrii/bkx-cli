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
            log(info(dir, 'Installing npm packages...'));
            exec(`cd ${dir} && npm i`, function(err, stdout) {
                log(success(dir, 'Npm packages installed successfully'))
                if (err) console.log('Error happen while installing packages: ', err);
            });
    });
}