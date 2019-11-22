<script>
    export let handleChange;
    export let value;
    export let placeholder
</script>

<input on:input={handleChange} bind:value={value} placeholder={placeholder}>

<style>
</style>