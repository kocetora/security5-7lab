import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
      defaults: {
        style: 'scss',
        script: 'typescript'
      },
      scss: {
        prependData: `@import "src/mixins.scss";`
      }
    })
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    vite: {
      server: {
        proxy: {
          '/': {
            target: 'http://localhost:4000',
            changeOrigin: true,
            secure: true,
          },
        },
      },
    },
  },
};

export default config;
