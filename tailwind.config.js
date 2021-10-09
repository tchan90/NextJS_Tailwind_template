const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['"Open Sans"', "Arial", "sans-serif"],
			nav: ["Roboto", "sans-serif"], // custom font
		},
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
			pink: colors.pink,
			white: "#FFF",
			black: "#000",

			// Primary
			primary: {
				light: "#4CB8E5",
				DEFAULT: "#0098D9",
			},
			// Secondary
			secondary: {
				DEFAULT: "#C7B593",
				dark: "#AF9565",
			},
		},
		screens: {
			mobile: { max: "375px" },
			tablet: { max: "768px" },
			bigTablet: { max: "1343px" },
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1343px",
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
