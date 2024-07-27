/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-color': 'hsl(var(--background-color))',
				'primary-color': 'hsl(var(--text-color))',
				'secondary-color': 'hsl(var(--footer-color))',
				'underline-color': 'hsl(var(--underline-color))',
				'underline-hover-color': 'hsl(var(--footer-hover-color))',
				'card-color': 'hsl(var(--card-color))',
				'card-hover-color': 'hsl(var(--card-hover-color))',
				'underline-color1': 'hsl(var(--underline-color1) / 0.2)',
				'underline-color2': 'hsl(var(--underline-color2) / 0.2)',
				'underline-color3': 'hsl(var(--underline-color3) / 0.2)',
				'underline-color4': 'hsl(var(--underline-color4) / 0.2)',
				'underline-color5': 'hsl(var(--underline-color5) / 0.2)',
				'underline-color6': 'hsl(var(--underline-color6) / 0.2)',
				'underline-color7': 'hsl(var(--underline-color7) / 0.2)',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
