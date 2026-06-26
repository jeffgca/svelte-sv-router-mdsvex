import 'sv-router/generated'
import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

declare module 'sv-router' {
	interface RouteMeta {
		public?: boolean
		section?: string
	}
}

const app = mount(App, {
	target: document.querySelector('#app'),
})

export default app
