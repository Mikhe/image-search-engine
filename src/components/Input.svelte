<script>
    import debounce from 'lodash.debounce';

    export let handleChange;
    export let value;
    export let placeholder;

    const handleInput = debounce(event => {
        handleChange(event);
    }, 800);
</script>

<input on:input={handleInput} bind:value={value} placeholder={placeholder}>

<style>
</style>