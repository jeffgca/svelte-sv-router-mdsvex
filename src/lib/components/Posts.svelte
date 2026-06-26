<script>
	import { Posts } from '../data/Posts.svelte'
	import Post from './Post.svelte'

	$inspect('Posts.svelte', Posts.posts)
</script>

{#each Posts.posts as post}
	<Post data={post} slug="posts" />
{/each}
