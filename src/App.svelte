<script lang="ts">
	import { Router } from 'sv-router'
	import './router'
	import { SiteConfig } from './lib/data/Site.svelte'

	// get package.json data
	import { siteConfig } from '../package.json'

	SiteConfig.config = {
		title: siteConfig.title,
		description: siteConfig.description,
		markdown: siteConfig.markdown,
	}
</script>

<a href="/">Home</a>
<a href="/about">About</a>

<Router />
