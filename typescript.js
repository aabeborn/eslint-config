module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    env:{
        browser:true,
        node:true
    },
    files: ['*.ts', '*.tsx'],
    // requires index, 
    // ecma overrides some rules if needed and add the parser
    // add tslint recommendend which overrides ecma and index
    // and finally our file
    // this is useful becuase the Typescript configuration is only one due to the fact that 
    // there is no distinction between commonjs and modules
    extends: ['./index.js', './ecma.js', 'plugin:@typescript-eslint/eslint-recommended'],
    rules: {
    }
}