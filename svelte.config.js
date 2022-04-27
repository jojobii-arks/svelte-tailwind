import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

//? Change when building site.
//!=================================
const buildingForGitHubPages = true;
//!=================================

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    paths: {
      base: dev ? '' : '/svelte-tailwind'
    }
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
    assets: 'docs'
  });
  config.kit.prerender = {
    default: true
  }
}

export default config;
