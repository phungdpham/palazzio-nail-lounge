const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		// colors: {
		// 	tPrimary: '#f6d484',
		// },
		extend: {
			fontFamily: {
        'comf': ['Comfortaa', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'nun': ['Nunito', 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'monte': ["Montserrat", "sans-serif"],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}