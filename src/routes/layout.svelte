<script lang="ts">
	import type { Snippet } from 'svelte'
	let { children }: { children: Snippet } = $props()
	import { p } from 'sv-router/generated'
</script>

<div class="wrapper">
	<nav>
		<a href={p('/')}>Home</a> | <a href={p('/about')}>About</a> |
		<a href={p('/posts')}>Posts</a>
	</nav>

	<div class="content prose">
		{@render children()}
	</div>
</div>

<style>
	.wrapper {
		margin: 0 auto;
		max-width: 800px;
		text-align: left;
	}
</style>
