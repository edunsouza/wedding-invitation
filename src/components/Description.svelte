<script>
  import { EVENT } from '../utils/constants';
  import Leaf from '../../public/img/leaf.svg';
  import Label from './Label.svelte';
</script>

<section>
  <Leaf />
  <article>
    <Label>{EVENT.DATE_STRING} às {EVENT.START}</Label>
    <Label type="secondary">{EVENT.ADDRESS}</Label>
  </article>
  <Leaf />
</section>

<style lang="scss">
  section {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    @media (max-width: $sm) {
      width: 100%;
    }

    :global(svg) {
      height: auto;
      width: 500px;
      fill: $secondary;
      @media (max-width: $sm) {
        width: 90px;
        position: absolute;
        right: calc(50% - 88px);
        bottom: 40%;
      }

      &:first-child {
        transform: rotateY(160deg);
        @media (max-width: $sm) {
          left: calc(50% - 88px);
        }
      }
    }
    article {
      width: 80%;

      :global(h1),
      :global(h2) {
        @media (max-width: $sm) {
          margin: 20px 0;
          font-size: 16px;
        }
      }

      :global(h1) {
        @media (max-width: $sm) {
          margin-bottom: 50px;
          font-size: 18px;
        }
      }
    }
  }
</style>
