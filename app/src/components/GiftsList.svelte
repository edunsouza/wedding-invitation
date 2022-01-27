<script>
  import { onMount } from 'svelte';

  import { EVENT_GIFTS_LIST } from '../utils/constants';

  let page;

  onMount(() => {
    setTimeout(() => {
      page.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }, 10);
  });
</script>

<div bind:this={page}>
  <h1>Click para ser redirecionado à lista de presentes</h1>
  <a href={EVENT_GIFTS_LIST} target="_blank">Lista de Presentes</a>
</div>

<style lang="scss">
  div {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $dark;
    a {
      color: $light;
      background-color: $dark;
      padding: 20px;
      font-size: 22px;
      border-radius: 10px;
    }
  }
</style>
