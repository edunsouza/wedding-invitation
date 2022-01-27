<script>
  import Leaf from '../../public/img/leaf-2.svg';
  import { EVENT_ADDRESS, EVENT_DATE_STRING, EVENT_START } from '../utils/constants';

  const [addressLine1, addressLine2] = EVENT_ADDRESS.split('—');
</script>

<section>
  <Leaf />
  <ul>
    <li>
      {EVENT_DATE_STRING}
    </li>
    <li>
      {EVENT_START}
    </li>
    <li>
      <span>{addressLine1}</span>
      <span>{addressLine2}</span>
    </li>
  </ul>
  <Leaf />
</section>

<style lang="scss">
  section {
    width: 75%;
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

    ul {
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 10px 0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0;
        color: $dark;
        font-size: 28px;
        flex-direction: column;
        margin: 10px 0;

        &:nth-child(2) {
          margin: 25px 0;
        }
      }
    }
  }
</style>
