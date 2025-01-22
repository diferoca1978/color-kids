/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		colors: {
			colorKidsBlue: '#89E7F1',
			colorKidslightBlue: '#CBEEF3',
			colorKidsfrenchRose: '#FB4D80',
			colorKidsfrenchMauve: '#C461E1',
			colorKidspearGreen: '#BFDE3A',
			colorKidsorangeWeb: '#F3A41A',

		},
		extend: {},
	},
	plugins: [
		require('preline/plugin', '@tailwindcss/typography'),
	],
}
