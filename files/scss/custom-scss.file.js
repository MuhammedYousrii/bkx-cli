module.exports = function (bootstrap) {
    return `@import './customize';
    
    // DEFAULT OVERRIDING
    @import url('https://fonts.googleapis.com/css?family=Roboto:400');
    $main-font: 'Roboto', sans-serif;
    $second-font: Arial, sans-serif;

    @import '~bianky-scss/bianky'; 
    ${bootstrap ? 
    'Import Bootstrap into entry scss file in case of Angular it will be [style.scss] but make sure that you import customized file file': null} `
   
}