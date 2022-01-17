<script>
  import { fly } from 'svelte/transition';

  import { typewriter, flyTransitionOptions } from '../utils/animations';
  import { EVENT_OWNERS, EVENT_DATE_STRING } from '../utils/constants';

  import Carousel from '../components/Carousel.svelte';
  import Title from './Title.svelte';
  import Subtitle from './Subtitle.svelte';
</script>

<header>
  <nav>
    <Title value={EVENT_OWNERS} transition={typewriter} />
    <Subtitle
      value={EVENT_DATE_STRING}
      transition={fly}
      transitionOptions={flyTransitionOptions}
    />
  </nav>
  <aside>
    <Carousel />
  </aside>
</header>

<style lang="scss">
  header {
    position: relative;
    height: 450px;
    width: 100%;

    nav,
    aside {
      height: 100%;
    }

    nav {
      width: 100%;
      text-align: center;
      position: absolute;
      z-index: 2;
    }

    aside {
      margin: 0;
      padding: 0;
      z-index: 1;
    }
  }
</style>
