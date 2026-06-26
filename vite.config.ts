import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { router } from 'sv-router/vite-plugin'
// import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte(), router(), tailwindcss()],
	base: process.env.MODE === 'production' ? `/${process.env.PAGES_BASE}` : '',
})
