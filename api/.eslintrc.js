module.exports = {
	'env': {
		'es2021': true,
		'node': true,
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'rules': {
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'always',
		],
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		'curly': 'error',
		'default-case': 'warn',
		'default-case-last': 'error',
		'default-param-last': 'warn',
		'eqeqeq': [
			'warn',
			'always',
		],
		'max-classes-per-file': [
			'error',
			1,
		],
		'no-empty-function': 'error',
		'no-eq-null': 'error',
		'no-floating-decimal': 'warn',
		'no-return-await': 'warn',
		'no-use-before-define': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'computed-property-spacing': [
			'error',
			'never',
		],
		'eol-last': [
			'error',
			'always',
		],
		'function-call-argument-newline': [
			'error',
			'consistent',
		],
		'implicit-arrow-linebreak': [
			'warn',
			'beside',
		],
		'key-spacing': [
			'warn',
			{
				'beforeColon': false,
			},
		],
		'keyword-spacing': [
			'error',
			{
				'before': true,
			},
		],
		'lines-between-class-members': [
			'warn',
			'always',
		],
		'multiline-ternary': [
			'error',
			'never',
		],
		'new-cap': [
			'error',
			{
				'capIsNew': true,
			},
		],
		'new-parens': 'error',
		'newline-per-chained-call': [
			'warn',
			{
				'ignoreChainWithDepth': 1,
			},
		],
		'no-mixed-operators': 'error',
		'no-multi-assign': 'warn',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 1,
			},
		],
		'no-tabs': [
			'error',
			{
				'allowIndentationTabs': true,
			},
		],
		'no-trailing-spaces': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'object-property-newline': [
			'error',
			{
				'allowAllPropertiesOnSameLine': true,
			},
		],
		'semi-spacing': 'error',
		'semi-style': [
			'error',
			'last',
		],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always',
			},
		],
		'space-in-parens': [
			'error',
			'never',
		],
		'space-unary-ops': 'warn',
		'switch-colon-spacing': 'error',
	},
};
