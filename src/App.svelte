<script lang="ts">
	// import { Router } from 'sv-router'
	import { Router } from 'sv-router'
	// import { p } from 'sv-router/generated'
	// import './router'
	import { SiteConfig } from './lib/data/Site.svelte'

	// console.log('isActiveLink', isActiveLink)

	// get package.json data
	import { siteConfig } from '../package.json'

	SiteConfig.config = {
		title: siteConfig.title,
		description: siteConfig.description,
		markdown: siteConfig.markdown,
	}
</script>

<Router base="#" />

<!-- <p>after router</p> -->
