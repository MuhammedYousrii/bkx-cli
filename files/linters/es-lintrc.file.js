// ES-LINTER CONFIG
// HOW IT'S WORK ?  

/**
 * @see https://eslint.org/docs/user-guide/getting-started
 * @description JUST INSTALL ES-LINT EXTENSION INTO VSCODE 
 * CREATE CONFIG FILE CALLED .ESLINTRC WITH SET OF RULES YOU NEED. 
 * PUT IT INTO YOUR WORKSPACE
 * AND IT WILL RUN IN EVERY FILE YOU OPEN 
 */

module.exports = `
    "extends": "rallycoding",
    "rules": {
        "import/no-unresolved": [0, { "commonjs": true }],
        "import/no-extraneous-dependencies": [0, {
            "devDependencies": false,
            "optionalDependencies": false
        }],
        "global-require": 0,
        "no-underscore-dangle": 0,
        "no-undef": 1,
        "react/jsx-uses-react": 0
    }
`