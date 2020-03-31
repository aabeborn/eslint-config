module.exports = {
	plugins: ['import'],
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	settings: {
		'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
	},
	rules: {
		// static analysis
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/default': 'error',
		'import/namespace': 'error',
		'import/no-restricted-paths': 'off',
		'import/no-absolute-path': 'error',
		'import/no-dynamic-require': 'off',
		'import/no-internal-modules': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'warn',
		'import/no-useless-path-segments': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-unused-modules': 'off',

		// helpul warnings
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-deprecated': 'warn',
		'import/no-extraneous-dependencies': 'error',
		'import/no-mutable-exports': 'error',
		'import/unambiguous': 'off',
		'import/no-commonjs': 'warn', // this one could be off
		'import/no-amd': 'error',
		'import/no-nodejs-modules': 'off',

		// style guide
		'import/first': 'error',
		'import/exports-last': 'off',
		'import/no-duplicates': 'error',
		'import/extensions': 'error',
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					['external', 'internal'],
					'parent',
					['sibling', 'index'],
				],
			},
		],
		'import/newline-after-import': 'off',
		'import/prefer-default-export': 'off',
		'import/max-dependencies': 'off',
		'import/no-unassigned-import': 'off',
		'import/no-named-default': 'error',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/group-exports': 'off',
		'import/dynamic-import-chunkname': 'off',

		'global-require': 'warn',
	},
}
