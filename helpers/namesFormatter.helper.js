const capitalize = require('./capitalize.helper');

module.exports = function namesFormatter(name, singleName) {
    return names = {
        lowerName: name.toLowerCase(),
        upperName: name.toUpperCase(),
        lowerSingle: singleName.toLowerCase(),
        capName: capitalize(name),
        capSingle: capitalize(singleName)
    }
}