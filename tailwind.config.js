/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0B1928",
				secondary: "#DDBC7A",
			},
			fontFamily: {
				primary: "Wix Madefor Display",
				secondary: "Lugrasimo",
			},
		},
	},
	plugins: [],
};
