const basePath = import.meta.env.BASE_PATH || ''
const hasBasePath = basePath !== '' && basePath !== '/'

console.log('XXX', { basePath, hasBasePath })

export function resolve(path, slug = '') {
	if (hasBasePath) {
		return `/${basePath}/${slug}/${path}`
	} else {
		return `/${slug}/${path}`
	}
}
