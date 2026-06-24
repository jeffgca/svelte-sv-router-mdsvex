import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'

const theme = 'github-dark'

const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript'],
})

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			// remarkPlugins: plugins,
			highlight: {
				highlighter: async (code, lang) => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, { lang, theme }),
					)
					return `{@html \`${html}\` }`
				},
			},
		}),
	],
}
