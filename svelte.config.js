import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$components: resolve('./src/lib/components'),
					$stores: resolve('./src/lib/stores'),
					$utils: resolve('./src/lib/utils')
				}
			}
		}
	}
};

export default config;
