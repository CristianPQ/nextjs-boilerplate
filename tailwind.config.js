/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/lib/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			center: true
		},
		screens: {
			'max-xl': { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			'max-lg': { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			'max-md': { max: '767px' },
			// => @media (max-width: 767px) { ... }

			'max-sm': { max: '639px' },
			// => @media (max-width: 639px) { ... }

			'max-xs': { max: '374px' },
			// => @media (max-width: 374px) { ... }

			xs: '375px',
			// => @media (min-width: 375px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px'
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				// gray: {
				// 	...colors.neutral,
				// 	150: '#f7f7f9',
				// 	350: '#BCBCBC'
				// }
				// donay: {
				// 	red: '#DA332E',
				// 	blue: '#4280FC',
				// 	'blue-light': '#B8E1FE',
				// 	green: '#24716A',
				// 	'dark-blue': '#002138',
				// 	'dark-green': '#2B4B40'
				// }
			}
		}
	},
	plugins: []
}
