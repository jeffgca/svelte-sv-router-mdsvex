<script>
	const { data, slug } = $props()
	// import { SiteConfig } from '../data/Site.svelte'
	import { p } from 'sv-router/generated'

	$inspect('data', data, slug)
</script>

<article class="prose">
	<h2><a href={p(`${slug}/${data.path}`)}>{data.title}</a></h2>
	<data.content />
	<p>Published {new Date(data.date).toDateString()}</p>
</article>

<style>
	article {
		margin: 1rem 0;
		text-align: left;
	}
</style>
