import { SiteConfig } from './Site.svelte'

async function fetchMarkdownPosts() {
	const postFiles = import.meta.glob('/src/routes/posts/md/*.md')

	return Promise.all(
		Object.entries(postFiles).map(async ([filePath, resolver]) => {
			const post = await resolver()
			const slug = filePath.replace(/^.*\//, '').replace(/\.md$/, '')
			const metadata = post.metadata ?? {}

			return {
				date: metadata.date ?? '',
				title: metadata.title ?? '',
				path: slug,
				summary: {
					html: metadata.description ?? '',
				},
			}
		}),
	)
}

let posts = await fetchMarkdownPosts()

export type Post = {
	title: string
	slug: string
	date: string
	// tags: string[]
	summary: {
		html: string
	}
}

export type Posts = Post[]

export const Posts = $state({ posts })

export function postSummary(post: Post) {
	return post
}

export function postSummaries(posts, query: object = {}) {
	return posts
}
