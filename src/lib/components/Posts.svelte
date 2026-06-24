<script>
	import { Posts } from '../../lib/models/Posts.svelte'
	import Post from '../components/Post.svelte'

	$inspect(Posts.posts)
</script>

<h2>Posts component</h2>

{#each Posts.posts as post}
	<Post {post} />
{/each}
