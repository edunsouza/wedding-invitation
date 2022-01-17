<script>
  import { fly } from 'svelte/transition';

  import Icon from './Icon.svelte';

  const images = [
    { src: 'img/cover-1.jpg', alt: 'noivos-1' },
    { src: 'img/cover-2.jpg', alt: 'noivos-2' },
    { src: 'img/cover-3.jpg', alt: 'noivos-3' },
  ];
  let index = 0;
  const next = () => index++;
  const back = () => index--;

  $: current = images[Math.abs(index % images.length)];
</script>

<div>
  <span>
    <Icon on:click={back} color="dark" icon="favorite" />
  </span>
  <img
    transition:fly={{ duration: 2000 }}
    on:readystatechange={() => console.log(12)}
    src={current.src}
    alt={current.alt}
  />
  <span>
    <Icon on:click={next} color="dark" icon="favorite" />
  </span>
</div>

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

  span :global(i) {
    animation: blink 0.7s 1s infinite alternate both ease-out;
    font-size: 50px;
  }

  div {
    height: 100%;
    display: flex;
    position: relative;

    img {
      min-width: 100%;
      max-width: 100%;
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
