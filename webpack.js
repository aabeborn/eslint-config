module.exports = {
	settings: {
		'import/resolver': 'webpack',
	},
	rules: {
		// fix needed => https://github.com/benmosher/eslint-plugin-import/issues/671
		'import/no-unassigned-import': 'off',
	},
}
