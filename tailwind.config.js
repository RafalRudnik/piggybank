/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Libre Franklin, sans-serif',
		},
		extend: {
			height: {
				screen: '100dvh',
			},
		},
	},
	plugins: [],
};
