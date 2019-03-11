const fs = require('fs');
const actionF = require('../files/actions.file');
const stateF = require('../files/state.file');
const serviceF = require('../files/service.file');
const {success} = require('./messager.core');

module.exports = (filename, filetypes, extension) => {
    if (filetypes.includes('|')) {
        filetypes.split('|').forEach(type => {
            const name = filename.split(',')[0]; 
            const single = filename.split(',')[1]; 
            const filePath = `${process.cwd()}/${name}.${type}.${extension}`;
            let fileContent;
            if (type === 'actions') fileContent = actionF(name || filename, single);
            if (type === 'states') fileContent = stateF(name || filename, single);
            if (type === 'services') fileContent = serviceF(name || filename, single)
            fs.writeFileSync(filePath, fileContent);
            return success(filePath);
        });
    }
};