<script>
  export let text = null;
  export let onClick = null;
  export let self = null;
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };
</script>

<button bind:this={self} on:click={handleClick}>{text}</button>

<style lang="scss">
  button {
    color: $light;
    cursor: pointer;
    background-color: $primary;
    padding: 20px;
    font-size: 22px;
    border-radius: 10px;

    &:active {
      background-color: darken($color: $primary, $amount: 10);
    }
  }
</style>
