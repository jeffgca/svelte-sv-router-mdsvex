<script>
	import { SiteConfig } from '../lib/models/Site.svelte'
	import Posts from '../../src/lib/components/Posts.svelte'
</script>

<h1>Home</h1>

<p>{SiteConfig.config.title}</p>

<Posts />
