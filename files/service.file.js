const names = require('../helpers/namesFormatter.helper');

module.exports = function(name, singleName) {
    const {upperName, lowerName, lowerSingle, capSingle, capName} = names(name, singleName);
    
    return `import { Injectable } from '@angular/core';
    import { ApiService } from '@services/apis.service';
    import { ${capSingle}Model } from './${capName}.model';
    
    @Injectable({
      providedIn: 'root'
    })
    export class ${capName}Service {
    
      private _route = 'admin/${lowerName}';
      constructor(
        private _APIS: ApiService
      ) { }
    
      public get${capName}(pagination) {
        return this._APIS.get(this._route);
      }

      public get${capSingle}(id) {
        return this._APIS.get(this._route, id);
      }
    
      public add${capSingle}(${lowerSingle}: ${capSingle}Model) {
        return this._APIS.post(this._route, ${lowerSingle});
      }
    
      public edit${capSingle}(${lowerSingle}: ${capSingle}Model) {
        return this._APIS.edit(this._route, ${lowerSingle}, ${lowerSingle}.id);
      }
    
      public remove${capSingle}(id: string) {
        return this._APIS.remove(this._route, id);
      }
    
    }
    `
}