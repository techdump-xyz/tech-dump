/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Dark Background
				"gb-dm-bg0": "#282828",
				"gb-dm-bg0-hard": "#1d2021",
				"gb-dm-bg0-soft": "#32302f",
				"gb-dm-bg1": "#3c3836",
				"gb-dm-bg2": "#504945",
				"gb-dm-bg3": "#665c54",
				"gb-dm-bg4": "#7c6f64",

				// Dark Foreground
				"gb-dm-fg0": "#fbf1c7",
				"gb-dm-fg1": "#ebdbb2",
				"gb-dm-fg2": "#d5c4a1",
				"gb-dm-fg3": "#bdae93",
				"gb-dm-fg4": "#a89984",

				// Dark Colors same for light and dark theme
				"gb-dark-red": "#cc241d",
				"gb-dark-green": "#98971a",
				"gb-dark-yellow": "#d79921",
				"gb-dark-blue": "#458588",
				"gb-dark-purple": "#b16286",
				"gb-dark-aqua": "#689d6a",
				"gb-dark-orange": "#d65d0e",
				"gb-dark-gray": "#928374",

				"gb-dm-light-red": "#fb4934",
				"gb-dm-light-green": "#b8bb26",
				"gb-dm-light-yellow": "#fabd2f",
				"gb-dm-light-blue": "#83a598",
				"gb-dm-light-purple": "#d3869b",
				"gb-dm-light-aqua": "#8ec07c",
				"gb-dm-light-orange": "#f38019",
				"gb-dm-light-gray": "#a89984",

				// Lightmode light colors
				"gb-lm-light-red": "#9d0006",
				"gb-lm-light-green": "#79740e",
				"gb-lm-light-yellow": "#b57614",
				"gb-lm-light-blue": "#076678",
				"gb-lm-light-purple": "#8f3f71",
				"gb-lm-light-aqua": "#427b58",
				"gb-lm-light-orange": "#af3a03",
				"gb-lm-light-gray": "#7c6f64",
			}
		},
	},
	plugins: [],
}
