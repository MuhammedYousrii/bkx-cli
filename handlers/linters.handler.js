const FS = require('flk-fs'),
createFile = require('../core/create-file.core'),
sassLinterFile = require('../files/linters/sass-lint.file'),
esLinterFile = require('../files/linters/es-lintrc.file'),
tsLinterFile = require('../files/linters/ts-lint.file.json'),
{ info, error, success, normal } = require('../helpers/chalk-apis.helper'),
{ join } = require('path'),
{ exec } = require('child_process'),
{ log } = console;


/**
 * @function
 * @param {string} path - where to init linters
 * @summary Setup needed linters.
 */
function createNeededFiles(path) {
    log(info('Creating Files...'))
    createFile(join(path, '.sass-lint.yml'), sassLinterFile);
    createFile(join(path, '.eslintrc'), esLinterFile);
    createFile(join(path, 'tslint.json'), JSON.stringify(tsLinterFile, null, 2))
    log(success('Files Created Successfully'));
}



module.exports = function(path = process.cwd()) {
    log(info('Installing rally-coding-config...'))
    exec('npm i eslint-config-rallycoding --save-dev', function(err, stdout) {
        log(normal(stdout));
        createNeededFiles(path);
        if (err) log(error(`Error Occur while installing dependency ${err}`))
    });
}