<script lang="ts">
	import { route, navigate } from '../router'
	import { Posts } from '../lib/data/Posts.svelte'
	import Post from '../lib/components/Post.svelte'

	$inspect('route.params', route.params, Posts.posts)

	let selectedPost = Posts.posts.find((post) => post.path === route.params.id)

	if (!selectedPost) {
		navigate('/404')
	}

	$inspect('selectedPost', selectedPost)
</script>

{#if selectedPost}
	<Post data={selectedPost} slug="posts" />
{/if}
