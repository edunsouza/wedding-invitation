<script>
  import { EVENT_GIFTS_LIST, GIFTS_LABEL, GIFTS_REDIRECT_LABEL } from '../utils/constants';
  import { scrollToElement } from '../utils/animations';
  import Label from '../components/Label.svelte';
  import Link from '../components/Link.svelte';

  let target = null;
  $: target && scrollToElement({ target });
</script>

<section bind:this={target}>
  <Label>{GIFTS_REDIRECT_LABEL}</Label>
  <Link href={EVENT_GIFTS_LIST}>{GIFTS_LABEL}</Link>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 85vh;
  }
</style>
