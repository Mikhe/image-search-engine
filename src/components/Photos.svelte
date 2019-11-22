<script>
    import { getContext } from 'svelte';
    import { toJson } from 'unsplash-js';

    import Photo from './Photo.svelte';
    import Input from './Input.svelte';

    const unsplash = getContext('unsplash');
    let search = '';
    let photos = fetchPics('awesome');

    async function fetchPics(search) {
        const response = await unsplash.search.photos(search, 1, 9);
        const result = await toJson(response);

        return result.results;
    }

    async function handleChange({ target: { value }}) {
        photos = await fetchPics(value);
    }
</script>

<Input handleChange={handleChange} value={search} placeholder="Search" />
{#await photos}
	<p>...loading</p>
{:then photos}
	<div class="photos">
    	{#each photos as { urls }}
    		<Photo url={urls.small} className="photo" />
    	{/each}
    </div>
{:catch error}
	<p style="color: red">Something went wrong ):</p>
{/await}

<style>
    .photos {
		display: -ms-flexbox;
        -ms-flex-direction: column;
        -ms-flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100vw;
        font-size: 0;
	}

    .photos:hover :global(.photo) {
        opacity: .8;
    }

    .photos:hover :global(.photo):hover {
        opacity: 1;
    }
</style>