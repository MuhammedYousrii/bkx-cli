module.exports = function(value) {
    if (value &&  typeof value !== 'number')
    return value.charAt(0).toUpperCase() +  value.slice(1);
    else return 'We cannot capitalize numbers';
}
