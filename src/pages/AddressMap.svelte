<script>
  import { EVENT, HOME } from '../utils/constants';
  import { scrollToElement } from '../utils/animations';
  import Label from '../components/Label.svelte';
  import Link from '../components/Link.svelte';

  const { TITLE, REDIRECT_LABEL, EMBED_URL, EXPANDED_URL } = HOME.MAP;
</script>

<section>
  <div>
    <Label>{TITLE}</Label>
    <Link href={EXPANDED_URL}>{REDIRECT_LABEL}</Link>
  </div>
  <iframe
    on:load={scrollToElement}
    allowfullscreen=""
    loading="lazy"
    title={EVENT.ADDRESS}
    src={EMBED_URL}
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
