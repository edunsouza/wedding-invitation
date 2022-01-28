<script>
  export let value = '';
  export let transition = null;
  export let transitionOptions = {};
</script>

{#if transition}
  <h2 transition:transition={transitionOptions}>{value}</h2>
{:else}
  <h2>{value}</h2>
{/if}

<style lang="scss">
  h2 {
    margin: 0;
    color: $primary;
    font-size: 42px;
    font-family: 'AmaticSC';
    @media (max-width: $sm) {
      font-size: 32px;
    }
  }
</style>
