module.exports = {
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: false,
	semi: false,
	importOrder: [
		'^@scripts/(.*)$',
		'^react$',
		'^next*',
		'<THIRD_PARTY_MODULES>',
		'^@data/(.*)$',
		'^@lib/(.*)$',
		'^@components/(.*)$',
		'^@styles/(.*)$',
		'^[./]'
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
