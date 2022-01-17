<script>
  import Icon from './Icon.svelte';
  import {
    EVENT_ADDRESS,
    EVENT_DATE_STRING,
    EVENT_START,
  } from '../utils/constants';
</script>

<div>
  <span>
    <Icon icon="calendar_month" color="secondary" />
    <aside>{EVENT_DATE_STRING}</aside>
  </span>
  <span>
    <Icon icon="watch_later" color="secondary" />
    <aside>{EVENT_START}</aside>
  </span>
  <span>
    <Icon icon="place" color="secondary" />
    <aside>{EVENT_ADDRESS}</aside>
  </span>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;
      color: $dark;
      font-size: 24px;

      &::before,
      &::after {
        content: '-';
        color: $secondary;
        transform: scaleX(10);
      }

      :global(i) {
        display: flex;
        justify-content: center;
        flex: 1;
        margin-right: 10px;
        font-size: 30px;
        cursor: inherit;
      }

      aside {
        flex: 3;
      }
    }
  }
</style>
