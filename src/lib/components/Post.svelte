<script>
	const { data, slug } = $props()
	// import { SiteConfig } from '../data/Site.svelte'
	import { resolve } from '../utils'

	// $inspect('SiteConfig', SiteConfig)
	// $inspect('data', data, slug)
</script>

<article class="prose">
	<h2><a href={resolve(data.path, slug)}>{data.title}</a></h2>
	<data.content />
	<p>Published {new Date(data.date).toDateString()}</p>
</article>

<style>
	article {
		margin: 1rem 0;
		text-align: left;
	}
</style>
