import { SiteConfig } from './Site.svelte'

export type Post = {
	title: string
	slug: string
	date: string
	tags: string[]
}

export type Posts = Post[]

export const Posts = $state([])

export function postSummary(post: Post) {
	return post
}

export function postSummaries(posts, query: object = {}) {
	return posts
}
