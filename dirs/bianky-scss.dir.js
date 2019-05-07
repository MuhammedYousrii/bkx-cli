const FS = require('flk-fs'),
{ join } = require('path'),
createFile = require('../core/create-file.core'),
file =  require('../files/linters/sass-lint.file');
module.exports = function(customFilePath, supportBootstrap) {
    const filePath = join(process.cwd(), '.sass-lint.yml');
    // const file
    createFile(filePath, file);
    // createFile(path.join(process.cwd(), ))
}