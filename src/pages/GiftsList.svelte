<script>
  import { HOME } from '../utils/constants';
  import { scrollToElement } from '../utils/animations';
  import Label from '../components/Label.svelte';
  import Link from '../components/Link.svelte';

  const { TITLE, REDIRECT_LABEL, LIST } = HOME.GIFTS;

  let target = null;
  $: target && scrollToElement({ target });
</script>

<section bind:this={target}>
  <Label>{TITLE}</Label>
  <Link href={LIST}>{REDIRECT_LABEL}</Link>
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
