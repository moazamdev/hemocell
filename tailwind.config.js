/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// animation: {
			// 	fade: "fade 1s ease-in-out forward",
			// },
			// keyframes: {
			// 	fade: {
			// 		// "0%": { transform: "translateY(5px)", opacity: "0" },
			// 		// "100%": { transform: "translateY(0px)", opacity: "1" },
			// 		"0%": { transform: "translateY(50px)" },
			// 		"100%": { transform: "translateY(0px)" },
			// 	},
			// },
		},
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
		},
		borderRadius: {
			full: "999px",
			rsm: "5px",
			rmd: "10px",
			rlg: "15px",
		},
		backgroundImage: {
			// "col-image":
			// 	"url('../client/src/assets/images/blood-donation(5).jpg')",
		},
	},
	plugins: [],
};
