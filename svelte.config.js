import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

//? Change when building site.
//!=================================
const buildingForGitHubPages = true;
//!=================================

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};


if (buildingForGitHubPages) {
  config.kit.adapter = adapterStatic({
    pages: 'docs',
    assets: 'docs',
  });
  config.kit.paths = {
    base: '/svelte-tailwind'
  };
  config.kit.prerender = {
    default: true
  }
}

export default config;
