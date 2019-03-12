const names = require('../helpers/namesFormatter.helper');


module.exports = function(name, singleName) {
    const {capSingle} = names(name, singleName);


    return `export interface ${capSingle}Model {
        id?: number
    }`;

}