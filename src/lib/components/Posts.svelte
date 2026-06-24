<script>
	import { Posts } from '../data/Posts.svelte'
	import Post from '../components/Post.svelte'

	$inspect(Posts.posts)
</script>

{#each Posts.posts as post}
	<Post data={post} />
{/each}
