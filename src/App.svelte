<script lang="ts">
	import { Router } from 'sv-router'
	import { SiteConfig } from './lib/data/Site.svelte'
	import { siteConfig } from '../package.json'

	let base

	if (import.meta.env.MODE !== 'production') {
		base = '#'
	} else {
		base = `${import.meta.env.PAGES_BASE}/#`
	}

	console.log('base', base)

	SiteConfig.config = {
		title: siteConfig.title,
		description: siteConfig.description,
		markdown: siteConfig.markdown,
	}
</script>

<Router {base} />

<!-- <p>after router</p> -->
