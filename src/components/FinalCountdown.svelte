<script>
  import { onMount, onDestroy } from 'svelte';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';

  import { EVENT, DAYS } from '../utils/constants';
  import { doubleDigit } from '../utils/string';
  import Leaves from '../../public/img/leaves.svg';

  dayjs.extend(duration);

  const calculate = () => {
    const event = dayjs(EVENT.DATE);
    const now = dayjs().add(1, 'day');
    const diff = dayjs.duration(event.diff(now));
    return {
      days: event.diff(now, 'days'),
      hours: doubleDigit(diff.hours()),
      minutes: doubleDigit(diff.minutes()),
      seconds: doubleDigit(diff.seconds()),
    };
  };

  let looper = 0;
  let { days, hours, minutes, seconds } = calculate();

  onDestroy(() => clearInterval(looper));
  onMount(() => {
    looper = setInterval(() => {
      const remaining = calculate();
      days = remaining.days;
      hours = remaining.hours;
      minutes = remaining.minutes;
      seconds = remaining.seconds;
    }, 1000);
  });
</script>

<section>
  <Leaves />
  <h1>{days} {DAYS}</h1>
  <h2>
    {hours}:{minutes}:{seconds}
  </h2>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 20px 0px;
    padding: 0;
    color: $dark;
    font-size: 24px;
    position: relative;

    @media (max-width: $sm) {
      margin: 0;
      font-size: 18px;
    }

    > :global(svg) {
      width: 480px;
      height: auto;
      position: absolute;
      transform: scaleX(1.6) scale(0.8) rotate(180deg);
      bottom: -30px;
      fill: $primary;

      @media (max-width: $sm) {
        max-width: 240px;
        bottom: -5px;
      }
    }
    h1,
    h2 {
      display: flex;
      justify-content: center;
      color: $secondary;
      font-size: 32px;
      margin: 0;

      @media (max-width: $sm) {
        font-size: 20px;
      }
    }
    h2 {
      font-size: 22px;
      color: $primary;
      @media (max-width: $sm) {
        font-size: 14px;
      }
    }
  }
</style>
