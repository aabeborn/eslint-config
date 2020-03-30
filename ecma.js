module.exports = {
	env: {
		es6: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	extends: ['prettier'],
	plugins: ['babel'],
	rules: {
		'arrow-body-style': 'off',
		'constructor-super': 'error',
		'generator-star-spacing': 'off', // don't use generators
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		// no-restricted-exports 404 on ESLint website
		'no-restricted-imports': 'off',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': ['error', 'properties'],
		'prefer-arrow-callback': [
			'error',
			{ allowNamedFunctions: true, allowUnboundThis: true },
		],
		'prefer-const': 'warn',
		'prefer-destructuring': 'warn',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'warn',
		'require-yield': 'error',
		'sort-imports': 'off', // import  plugin
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': 'off',

		// babel
		'babel/object-curly-spacing': 'off',
		'babel/semi': 'off',
		'new-cap': 'off',
		'babel/new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true,
			},
		],
		camelcase: 'off',
		'babel/camelcase': ['error', { properties: 'always' }],
		'no-invalid-this': 'off',
		'babel/no-invalid-this': 'error',
		'valid-typeof': 'off',
		'babel/valid-typeof': 'error',
		'babel/no-unused-expressions': 'error',
		'no-unused-expressions': 'off',
		'babel/quotes': [
			'error',
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
		// no eslint version
		'babel/flow-object-type': 'off',
		// deprecated rules
		'babel/array-bracket-spacing': 'off',
		'babel/arrow-parens': 'off',
		'babel/func-params-comma-dangle': 'off',
		'babel/generator-star-spacing': 'off',
		'babel/object-shorthand': 'off',
		'babel/no-await-in-loop': 'off',
	},
}
