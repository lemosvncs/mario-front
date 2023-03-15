import preprocess from "svelte-preprocess";
// import { vitePreprocess } from '@sveltejs/kit/vite';
// import adapter from '@sveltejs/adapter-node';
import adapter from "@sveltejs/adapter-netlify";
// import adapter from '@sveltejs/adapter-static';
// import vercel from '@sveltejs/adapter-vercel'

export default {
  kit: {
    // adapter: vercel(),
    // target: '#svelte',
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: true,
 
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  },
    // adapter: adapter({
    //   // default options are shown. On some platforms
    //   // these options are set automatically — see below
    //   pages: 'build',
    //   assets: 'build',
    //   fallback: null,
    //   precompress: false,
    //   strict: true
    // })
  // }

  preprocess: [
  //   vitePreprocess({postcss: true}),
    preprocess({
      postcss: true,
    }),
  ],
};
