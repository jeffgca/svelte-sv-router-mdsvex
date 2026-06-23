const siteConfig = {
	config: {
		title: 'My Site',
		description: 'A description of my site',
		markdown: {
			path: 'src/md',
		},
	},
}

export const SiteConfig = $state(siteConfig)
