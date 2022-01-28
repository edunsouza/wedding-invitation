<script>
  import {
    EVENT_ADDRESS,
    EVENT_MAP_EMBED,
    MAP_REDIRECT_LABEL,
    MAP_LABEL,
    EVENT_MAP_EXPANDED,
  } from '../utils/constants';
  import { scrollToElement } from '../utils/animations';
  import Label from '../components/Label.svelte';
  import Link from '../components/Link.svelte';
</script>

<section>
  <div>
    <Label>{MAP_LABEL}</Label>
    <Link href={EVENT_MAP_EXPANDED}>{MAP_REDIRECT_LABEL}</Link>
  </div>
  <iframe
    on:load={scrollToElement}
    allowfullscreen=""
    loading="lazy"
    title={EVENT_ADDRESS}
    src={EVENT_MAP_EMBED}
    width="100%"
    height="100%"
  />
</section>

<style lang="scss">
  section {
    height: 70vh;
    width: 90%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    iframe {
      border: 2px solid $dark;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
</style>
