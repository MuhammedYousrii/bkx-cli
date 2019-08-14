module.exports = function (bootstrap) {
    return `

    /**
     * Override [bianky ${bootstrap ? ',bootstrap' : ''}] variables here OR separate it into another file 
     * 
    */
    
    // DEFAULT OVERRIDING
    @import url('https://fonts.googleapis.com/css?family=Roboto:400');
    $main-font: 'Roboto', sans-serif;
    $second-font: Arial, sans-serif;

    @import '~bianky-scss/bianky'; 
    ${bootstrap ? 
    '@import "~bootstrap/scss/bootstrap";': null} `
   
}