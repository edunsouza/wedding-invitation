<script>
  import { isProd } from '../utils/env';
  import { EVENT_ADDRESS, EVENT_MAP_EMBED } from '../utils/constants';
</script>

{#if isProd}
  <iframe
    allowfullscreen=""
    loading="lazy"
    title={EVENT_ADDRESS}
    src={EVENT_MAP_EMBED}
    width="600"
    height="350"
  />
{/if}

<style lang="scss">
  @import '../styles/variables';

  iframe {
    border: 1px solid $primary;
    border-radius: 10px;
    box-shadow: $primary 1px 1px 15px 0px;
  }
</style>
