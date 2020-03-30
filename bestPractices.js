module.exports = {
	env: {
		broswser: true,
		node: true,
	},
	rules: {
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'warn',
		complexity: ['error', 20], // as default
		'consistent-return': 'error',
		curly: 'off',
		'default-case': 'error',
		// default-case-last	404 on the ESLint website
		'default-param-last': 'off',
		'dot-notation': 'error', // review this one, bit tricky
		eqeqeq: 'off',
		'grouped-accessor-pairs': 'off',
		'guard-for-in': 'error',
		'max-classes-per-file': ['warn', 1], // I know, it is better error in this case
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-constructor-return': 'error',
		'no-div-regex': 'error',
		'no-else-return': ['error', { allowElseIf: true }], // need a check
		'no-empty-function': 'off', // I know i'm a fool, but not so much... I think
		'no-empty-pattern': 'error',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'error', // not sure about this one. In old dev-friendly Js was an usual thing to do
		'no-implied-eval': 'error',
		'no-invalid-this': 'error', // strict mode related
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error', // code smells
		'no-magic-numbers': 'off',
		'no-multi-str': 'error',
		'no-new': 'warn',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': 'off', // boh
		'no-return-assign': 'error',
		'no-return-await': 'warn',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off', // sometimes that comments saves my life
		'no-with': 'error', // eslint recommended
		'prefer-named-capture-group': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'off',
		radix: 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'off',
		'vars-on-top': 'error',
		'wrap-iife': 'off', // needs more investigation
		yoda: 'error',
	},
}
