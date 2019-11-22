<script>
    export let className;
    export let url;
</script>

<figure class={className}>
    <img src={url}>
</figure>

<style>
	figure {
        width: 33.3%;
        transition: .8s opacity;
        margin: 0;
	}

	figure img {
	    width: 90%;
	    padding: 5%;
	}
</style>