const fs = require('fs'),
{
    success
} = require('./messager.core');

module.exports = (path, content) => {
    fs.writeFileSync(path, content);
    return success(path);
};