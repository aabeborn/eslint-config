/* stylistic section of the eslint rules website 
   removed all the rules that prettier already implements
*/

module.exports = {
	extends: ['prettier'],
	env: {
		browser: true,
		node: true,
	},
	rules: {
		camelcase: ['error', { properties: 'always' }],
		'capitalized-comments': 'off',
		'consistent-this': 'off', // all wasted time (https://eslint.org/docs/rules/consistent-this)
		'func-names': 'error',
		'func-name-matching': 'error',
		'func-style': 'off',
		'id-blacklist': 'error',
		'id-length': 'off', // leave some freedom here
		'id-match': [
			'error',
			// camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
			// this rule is taken from kentcdodds. It is perfect for me
			'^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
		],
		'line-comment-position': 'off',
		'lines-between-class-members': 'warn', // I love white spaces in code. It's a lot more readable
		'max-depth': ['error', 4], // default
		// someone said to me that code smells :-0
		'max-lines': [
			'error',
			{ max: 2500, skipBlankLines: true, skipComments: true },
		],
		// someone said to me, again, that code smells :-0  But it is an high value so no problems!
		'max-lines-per-function': [
			'error',
			{ max: 500, skipBlankLines: true, skipComments: true },
		],
		'max-nested-callbacks': ['error', 7],
		'max-params': ['error', 15],
		'max-statements': ['warn', 10],
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-comment-style': 'off',
		'new-cap': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'warn', // sometimes continue might be useful
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-multi-assign': 'error',
		'no-negated-condition': 'warn', // damn no
		'no-nested-ternary': 'off',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-ternary': 'off',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
		'operator-assignment': 'off',
		'padding-line-between-statements': 'off', // why ????????
		//  Next line is for eslint >= 6.7.0 so wait to put it in
		// 'prefer-exponentiation-operator	': 'warn',
		'prefer-object-spread': 'warn',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': ['warn', 'always'],
	},
}
