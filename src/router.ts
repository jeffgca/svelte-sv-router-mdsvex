import { createRouter } from 'sv-router'
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'

export const { p, navigate, isActive, route } = createRouter({
	'/': Home,
	'/about': About,
	'/posts': () => import('./routes/posts/Posts.svelte'),
	'/posts/:id': () => import('./routes/posts/Post.svelte'),
	layout: () => import('./routes/Layout.svelte'),
})
