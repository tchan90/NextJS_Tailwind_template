const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.js", "./components/**/*.jsx", "./modals/**/*.jsx"], //remove unused files in production
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			// Build your palette here
			transparent: "transparent",
			current: "currentColor",
			gray: colors.trueGray,
			red: colors.red,
			blue: colors.sky,
			yellow: colors.amber,
			teal: colors.teal,
			purple: colors.purple,
		},
		extend: {},
	},
	variants: {
		extend: {
			textColor: ["active"],
		},
	},
	plugins: [],
};
