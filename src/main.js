import Unsplash from 'unsplash-js';

import App from './App.svelte';

const unsplash = new Unsplash({
	accessKey: '453c0497bd451630793469870721582676c0dba12d7063985e92e39b1fb558d3',
});

const app = new App({
	target: document.body,
	props: {
		unsplash: unsplash,
	}
});

export default app;