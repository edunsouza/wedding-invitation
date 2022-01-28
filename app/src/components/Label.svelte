<script>
  const primary = 'primary';
  const secondary = 'secondary';
  export let type = primary;
</script>

{#if type === secondary}
  <h2><slot /></h2>
{:else}
  <h1><slot /></h1>
{/if}

<style lang="scss">
  h1,
  h2 {
    color: $dark;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 24px;
    @media (max-width: $sm) {
      font-size: 14px;
    }
  }
  h2 {
    font-size: 18px;
    @media (max-width: $sm) {
      font-size: 12px;
    }
  }
</style>
