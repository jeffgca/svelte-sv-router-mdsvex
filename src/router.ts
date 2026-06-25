import { createRouter } from 'sv-router'
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import Posts from './routes/Posts.svelte'

// handle base path for GitHub Pages deployment
const base = import.meta.env.BASE_URL

export const { p, navigate, isActive, route } = createRouter(
	{
		'/': Home,
		'/about': About,
		'/posts': Posts,
		'/posts/:id': () => import('./routes/posts/Post.svelte'),
		layout: () => import('./routes/Layout.svelte'),
	},
	{
		base,
	},
)
