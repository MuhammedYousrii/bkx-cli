module.exports = function(bootstrapSupport) {
    return `


    /**
     * Override [bianky ${bootstrapSupport ? ',bootstrap' : ''}] variables here OR separate it into another file 
     * 
    */

    // IF HTML DEFAULT FONT-SIZE NOT CHANGED VALUE WILL BE 16PX 
    $spacer: 1rem;
    
    // TO ACCESS BOOTSTRAP DEFAULTS WITH YOUR CUSTOM 
    // CREATE EMPTY MAP WITH DEFAULT FLAG TO MAKE MIXIN S SEARCH IN TWO MAPS
    $spacers: ( 6: ($spacer * 3.5), 7: ($spacer * 4), 8: ($spacer * 4.5), 9: ($spacer * 5), 10: ($spacer * 6), 11: ($spacer * 7), 12: ($spacer * 8), 15: ($spacer * 10) );
    
    
    // TO ACCESS BOOTSTRAP DEFAULTS WITH YOUR CUSTOM
    // CREATE EMPTY MAP WITH DEFAULT FLAG INTO _VARS.SCSS TO MAKE MIXIN S SEARCH IN TWO MAPS
    $sizes: (
        10: 10%,
        20: 20%,
        30: 30%,
        40: 40%,
        60: 60%,
        70: 70%,
        80: 80%,
        90: 90%,
    );
    
    
    // JUST PUT YOUR TEMPLATE COLORS AND BOOTSTRAP WILL HANDLE EVERYTHING 
    // $theme-colors: ( 'delta-blue': $delta-blue, 'delta-gold': $delta-gold, 'delta-white': $delta-gray, 'delta-sky': $delta-sky );
    
    
    // ENABLE BOOTSTRAP OPTIONAL FEATURES 
    $enable-gradients: true !default;
    `;
}