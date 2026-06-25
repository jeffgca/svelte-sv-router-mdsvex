import { createRouter } from 'sv-router'
import Home from './views/Home.svelte'
import About from './views/About.svelte'
import Posts from './views/Posts.svelte'
import Post from './views/Post.svelte'
import Layout from './views/Layout.svelte'
import NotFound from './views/NotFound.svelte'

// handle base path for GitHub Pages deployment
const base = import.meta.env.BASE_URL || ''

// console.log('base', base)

let options = {}

if (base.length > 0 && base !== '/') {
	options = {
		base,
	}
}

console.log('options', options)

export const { p, navigate, isActive, route } = createRouter(
	{
		'/': Home,
		'/about': About,
		'/posts': Posts,
		'/posts/:id': Post,
		'*': NotFound,
		'/404': NotFound,
		layout: Layout,
	},
	options,
)
