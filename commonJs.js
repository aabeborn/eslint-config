// Useful particullary in nodejs
module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'callback-return': 'off',
		'global-require': 'warn',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'warn',
		'no-mixed-requires': ['error', { grouping: true, allowCall: false }],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'off',
		'no-process-exit': 'warn', // in some node app maybe used
		'no-restricted-modules': 'off',
		'no-sync': 'off',
	},
}
