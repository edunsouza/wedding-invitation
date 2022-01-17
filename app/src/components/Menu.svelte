<script>
  import Icon from './Icon.svelte';
  import Subtitle from './Subtitle.svelte';

  export let items = [];

  let selected = 0;
  const setSelected = (index) => (selected = index);
</script>

<nav>
  {#each items as item, i}
    <span on:click={() => setSelected(i)}>
      <Subtitle value={item.label} />
      <Icon icon={item.icon} />
    </span>
  {/each}
</nav>
<article>
  {#each items as item, index}
    {#if selected === index}
      <div>
        <svelte:component this={item.component} value={item.label} />
      </div>
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
      font-size: 32px;
      border-top: 3px solid $dark;

      :global(i) {
        font-size: 42px;
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
