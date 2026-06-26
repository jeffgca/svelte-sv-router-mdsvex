import { createRouter } from 'sv-router';
import Notfound from '../src/routes/[...notfound].svelte';
import About from '../src/routes/about.svelte';
import Index from '../src/routes/index.svelte';
import Layout from '../src/routes/layout.svelte';

export const routes = {
  '*notfound': Notfound,
  '/about': About,
  '/': Index,
  'layout': Layout,
  '/posts': {
    '/:slug': {
      '/': () => import('../src/routes/posts/[slug]/index.lazy.svelte')
    },
    '/md': {
      '/images': {}
    }
  }
};
export type Routes = typeof routes;
export const { p, navigate, isActive, preload, route } = createRouter(routes);
