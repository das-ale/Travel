import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Anton'],
				subtitle: ['Montserrat'],
				body: ['spectral'],
				display: ['Lobster'],
			},
		},
	},
	plugins: [
		animations,
	],
}
