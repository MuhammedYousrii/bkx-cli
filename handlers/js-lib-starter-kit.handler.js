const cloneRepo = require('../core/clone-repo.core');


/**
 * @param {string} dir - Directory where CLI will clone the JS-lib-starter-kit.
 */
module.exports = function(dir) {
    cloneRepo(dir);
}