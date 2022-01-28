<script>
  import { EVENT_ADDRESS, EVENT_DATE_STRING, EVENT_START } from '../utils/constants';
  import Leaf from '../../public/img/leaf-2.svg';
  import Label from './Label.svelte';
</script>

<section>
  <Leaf />
  <article>
    <Label>{EVENT_DATE_STRING} às {EVENT_START}</Label>
    <Label type="secondary">{EVENT_ADDRESS}</Label>
  </article>
  <Leaf />
</section>

<style lang="scss">
  section {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    :global(svg) {
      height: auto;
      width: 500px;
      fill: $secondary;
      &:first-child {
        transform: rotateY(160deg);
      }
    }
    article {
      width: 80%;
    }
  }
</style>
