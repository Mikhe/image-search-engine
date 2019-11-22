<script>
    import { setContext } from 'svelte';
    import Photos from './components/Photos.svelte';

    export let unsplash;

    setContext('unsplash', unsplash);
</script>

<main>
    <h1>Awesome pics!</h1>
	<Photos />
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>