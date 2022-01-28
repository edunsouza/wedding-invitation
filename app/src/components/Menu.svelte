<script>
  import Icon from './Icon.svelte';
  import Subtitle from './Subtitle.svelte';

  export let items = [];

  let index = 0;
  let selected = false;
  const select = (i) => {
    index = i;
    selected = true;
  };
</script>

<nav>
  {#each items as item, i}
    <span on:click={() => select(i)}>
      <Subtitle value={item.label} />
      <Icon icon={item.icon} />
    </span>
  {/each}
</nav>
<article>
  {#each items as item, i}
    {#if index === i && selected}
      <svelte:component this={item.component} value={item.label} />
    {/if}
  {/each}
</article>

<style lang="scss">
  article {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: $dark;
    span {
      flex: 1;
      cursor: pointer;
      user-select: none;
      border-top: 2px solid $dark;
      @media (max-width: $sm) {
        border-width: 1px;
      }

      > :global(h2) {
        @media (max-width: $sm) {
          display: none;
        }
      }

      :global(i) {
        font-size: 42px;
        @media (max-width: $sm) {
          margin-top: 15px;
        }
      }
      &:hover {
        border-bottom-color: $secondary;
        :global(h2) {
          color: $secondary;
        }
        :global(i) {
          color: $secondary;
        }
      }
    }
  }
</style>
