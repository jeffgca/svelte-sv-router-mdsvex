<script lang="ts">
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<nav>
	<a href="/">Home</a> | <a href="/about">About</a> | <a href="/posts">Posts</a>
</nav>

<div class="wrapper prose">
	{@render children()}
</div>

<style>
	.wrapper {
		margin: 0 auto;
		max-width: 800px;
		text-align: left;
	}
</style>
