module.exports = {
	root: true,
	parserOptions: { ecmaVersion: 'latest' },
	extends: [
		'prettier',
		'plugin:vue/vue3-recommended',
		'@vue/typescript',
		'@orion.ui/eslint-config-orion',
	],
};
