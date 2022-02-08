<script>
  import { fly } from 'svelte/transition';
  import { imagesRoot } from '../utils/env';
  import { isMobile } from '../utils/device';

  import Icon from './Icon.svelte';

  const carouselLength = 4;
  let index = 0;
  let current = {};
  const next = () => index++;
  const back = () => index--;
  const toImageUrl = (img) => `${imagesRoot}/${img}`;

  $: {
    const i = 1 + Math.abs(index % carouselLength);
    const size = isMobile() ? 'sm' : 'lg';
    current = {
      src: `cover-${i}-${size}.jpg`,
      alt: `cover-${i}`,
    };
  }
</script>

<section>
  <span>
    <Icon on:click={back} color="dark" icon="favorite" />
  </span>
  <img
    transition:fly={{ duration: 2000 }}
    src={toImageUrl(current.src)}
    alt={current.alt}
  />
  <span>
    <Icon on:click={next} color="dark" icon="favorite" />
  </span>
</section>

<style lang="scss">
  @keyframes blink {
    10%,
    40% {
      transform: scale(1);
    }
    60%,
    80% {
      transform: scale(1.2);
    }
  }
  section {
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    span :global(i) {
      animation: blink 0.7s 1s infinite alternate both ease-out;
      font-size: 50px;
      @media (max-width: $sm) {
        font-size: 32px;
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      object-position: 50% 60%;
    }
    span {
      position: absolute;
      top: calc(50% - 40px);
      z-index: 10;

      &:first-child {
        right: 5%;
        transform: rotate(-90deg);
      }
      &:last-child {
        left: 5%;
        transform: rotate(90deg);
      }
    }
  }
</style>
