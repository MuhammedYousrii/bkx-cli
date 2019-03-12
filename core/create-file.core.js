const fs = require('fs');
const actionF = require('../files/actions.file');
const stateF = require('../files/state.file');
const serviceF = require('../files/service.file');
const {
    success
} = require('./messager.core');

module.exports = (path, content) => {
    fs.writeFileSync(path, content);
    return success(path);
};