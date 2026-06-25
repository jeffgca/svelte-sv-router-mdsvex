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

<h1>App.svelte</h1>

<Router />

<!-- <p>after router</p> -->
