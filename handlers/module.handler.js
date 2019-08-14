const FS = require('fs');
const path = require('path');
const actionF = require('../files/actions.file');
const stateF = require('../files/state.file');
const serviceF = require('../files/service.file');
const modelF = require('../files/model.file');
const { moduleF, routeModuleF } = require('../files/module.file');
const createFile = require('../core/create-file.core');
const { warn } = require('../core/logger.core');



module.exports = function(names, extension = 'ts', createModuleFiles = false) {
    const dir = path.join(process.cwd(), 'model'),
        storeDir = path.join(dir, 'store'),
        [name, single] = names.split(',');

        if (FS.existsSync(dir)) return warn(`${dir}`); 
        FS.mkdir(dir, (err) => {
            if (err) return console.error(err);
            FS.mkdirSync(storeDir);
            createFile(path.join(dir, `${name}.service.ts`), serviceF(name, single));
            createFile(path.join(dir, `${name}.model.ts`), modelF(name, single));
            createFile(path.join(storeDir, `${name}.actions.ts`), actionF(name, single));
            createFile(path.join(storeDir, `${name}.state.ts`), stateF(name, single));
        
            if(createModuleFiles) {
                createFile(path.join(process.cwd(), `${name}.module.ts`), moduleF(name, single));
                createFile(path.join(process.cwd(), `${name}-routing.module.ts`), routeModuleF(name, single));
            } 
        })
    
}
