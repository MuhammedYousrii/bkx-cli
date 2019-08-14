const fs = require('fs'),
{
    success
} = require('./logger.core');

module.exports = (path, content) => {
    fs.writeFileSync(path, content);
    return success(path);
};