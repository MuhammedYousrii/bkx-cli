const names = require('../helpers/namesFormatter.helper');

function ActionFile(name, singleName) {
    const {upperName, lowerName, lowerSingle, capSingle, capName} = names(name, singleName);
    

    return `import { ${capSingle}Model } from '../${lowerName}.model';

    export class Get${capName}Action {
        static readonly type = '[${upperName} API] get ${lowerName}';
        constructor(public pagination: {
            keywords: string,
            page: number,
            itemsPerPage: number
        }) {}
    }
    
    export class Get${capSingle}Action {
        static readonly type = '[${upperName} API] get ${capSingle}';
        constructor (public id: number) {} 
    }
    
    export class Remove${capSingle}Action {
        static readonly type = '[${upperName} API] remove ${lowerSingle}';
        constructor(public id: number) {}
    }
    
    export class Add${capSingle}Action {
        static readonly type = '[${upperName} APIS] add ${lowerSingle}';
        constructor (public ${lowerSingle}: ${capSingle}Model) {}
    }
    
    export class Edit${capSingle}Action {
        static readonly type = '[${upperName} APIS] edit ${lowerSingle}';
        constructor (public ${lowerSingle}: ${capSingle}Model) {}
    }
    `;
};

module.exports = ActionFile;