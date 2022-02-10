<script>
  export let value = null;
  export let mask = false;
  export let onInput = null;
  const handleInput = ({ target }) => {
    if (typeof onInput === 'function') {
      onInput(target.value);
    }
  };
</script>

{#if mask}
  <input type="password" bind:value on:input={handleInput} />
{:else}
  <input type="text" bind:value on:input={handleInput} />
{/if}

<style lang="scss">
  input {
    font-size: 26px;
    padding: 10px;
    border: 2px solid $dark;
    border-radius: 10px;
    color: $primary;
    text-align: center;
    background: $light;
  }
</style>
