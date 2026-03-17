import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
preprocess: vitePreprocess(),
kit: {
adapter: adapter(),
alias: {
$lib: "./src/lib",
"$lib/*": "./src/lib/*",
"@jeevatix/ui": "../../packages/ui/src/index.ts",
"@jeevatix/ui/*": "../../packages/ui/src/*"
}
}
};

export default config;
