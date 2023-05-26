/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["manrope", "system-ui"],
			serif: ["Arapey", "serif"],
		},
		colors: {
			dark: "#161A1B",
			light: "#4F5561",
			dark_red: "#260303",
			red: "#400606",
			off_white: "#F2F2F2",
			white: "#FFFFFF",
			gray: "#999999",
			dark_gray: "#444444",
			green: "rgb(20 83 45)",
		},
		borderRadius: {
			full: "999px",
			rsm: "5px",
			rmd: "10px",
			rlg: "15px",
		},
		backgroundImage: {},
	},
	plugins: [],
};
