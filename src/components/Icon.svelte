<script>
  export let icon = 'favorite';
  export let color = 'primary';
  export let classes = '';
</script>

<i class="i-sm material-icons {color} {classes}" on:click>
  {icon}
</i>

<style lang="scss">
  i {
    user-select: none;
    cursor: pointer;
  }
  .primary {
    color: $primary;
  }
  .secondary {
    color: $secondary;
  }
  .dark {
    color: $dark;
  }
  .light {
    color: $light;
  }
</style>
