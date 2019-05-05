const FS = require('flk-fs'),
path = require('path'),
createFile = require('../core/create-file.core'),
file =  require('../files/sass-lint.file');
module.exports = function() {
   createFile(process.cwd(), file);
}