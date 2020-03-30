module.exports = {
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'init-declarations': 'off', // are you kidding me
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': ['error', 'event', 'fdescribe'],
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^ignored',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': 'off', // sometimes could be really annoying
	},
}
