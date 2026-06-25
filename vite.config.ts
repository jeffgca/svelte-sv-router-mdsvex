import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte(), tailwindcss()],
	base: process.env.MODE === 'production' ? `/${process.env.PAGES_BASE}` : '',
})
