<script>
  export let href = '';
</script>

<a {href} target="_blank">
  <slot />
</a>

<style lang="scss">
  a {
    color: $light;
    background-color: $dark;
    padding: 20px;
    font-size: 22px;
    border-radius: 10px;
  }
</style>
