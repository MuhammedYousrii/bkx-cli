const { join } = require('path'),
{ existsSync, mkdirSync } = require('fs'),
{ exec } = require('child_process'),
{ log } = console,
{ info, error, success, normal } = require('../helpers/chalk-apis.helper'),
createFile = require('../core/create-file.core'),
installPackage = require('../core/install-package.core'),
linterFile =  require('../files/linters/sass-lint.file'),
customFile = require('../files/scss/custom-scss.file');



/**
 * 
 * @summary Scss 
 * 
 * @param {string} customPath - Custom path for scss files.  
 * @param {Boolean} supportBootstrap - Import bootstrap.
 */
function setupScssDir(customPath, supportBootstrap) {
    const basePath = customPath ? join(process.cwd(), customPath): process.cwd();
    if (!existsSync(basePath)) 
    mkdirSync(basePath);
    createFile(join(basePath, '.sass-lint.yml'), linterFile);
    createFile(join(process.cwd(), '_bianky.scss'), customFile(supportBootstrap))
    installPackage('bianky-scss', 'D', false)
}


module.exports = setupScssDir;