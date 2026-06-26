<script lang="ts">
	// import { route, navigate } from '../../../router'
	import { route, p } from 'sv-router/generated'
	// import 'sv-router/generated'
	import { Posts } from '../../../lib/data/Posts.svelte'
	import Post from '../../../lib/components/Post.svelte'

	$inspect('route.params', route.params, Posts.posts)

	let selectedPost = Posts.posts.find((post) => post.path === route.params.slug)

	// if (!selectedPost) {
	// 	navigate('/x404')
	// }

	$inspect('selectedPost', selectedPost)
</script>

<!-- <h2>index.lazy.svelte</h2> -->

{#if selectedPost}
	<Post data={selectedPost} slug="posts" />
{:else}
	<!-- <Posts /> -->

	<h2>All Posts</h2>

	{#each Posts.posts as post}
		<Post data={post} slug="posts" />
	{/each}
{/if}
