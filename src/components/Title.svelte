<script>
  export let value = '';
  export let transition = Function();
</script>

<h1 transition:transition>{value}</h1>

<style lang="scss">
  h1 {
    margin: 0;
    margin-top: 10px;
    color: $dark;
    font-size: 72px;
    font-family: 'LobsterTwo', Roboto, sans-serif;
    @media (max-width: $sm) {
      font-size: 44px;
    }
  }
</style>
