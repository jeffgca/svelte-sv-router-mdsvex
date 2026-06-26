<script>
	import { SiteConfig } from '../lib/data/Site.svelte'
	import Posts from '../lib/components/Posts.svelte'
</script>

<h2>Home.svelte</h2>

<p>{SiteConfig.config.title}</p>

<Posts />
