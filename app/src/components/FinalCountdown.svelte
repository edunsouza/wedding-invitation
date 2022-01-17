<script>
  import { onMount, onDestroy } from 'svelte';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
  import { EVENT_DATE } from '../utils/constants';
  import Icon from './Icon.svelte';

  dayjs.extend(duration);

  const calculate = () => {
    const event = dayjs(EVENT_DATE);
    const now = dayjs();
    const diff = dayjs.duration(event.diff(now));
    return {
      days: event.diff(now, 'days'),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds(),
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

<div>
  <span>{days} Dias</span>
  <Icon icon="noise_control_off" color="dark" />
  <span>{hours} Horas</span>
  <Icon icon="noise_control_off" color="dark" />
  <span>{minutes} Minutos</span>
  <Icon icon="noise_control_off" color="dark" />
  <span>{seconds} Segundos</span>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 0 0 10px 0;
    color: $dark;
    border: 3px solid $dark;
    font-size: 32px;
    z-index: 100;

    :global(i) {
      font-size: 20px;
    }

    span {
      display: flex;
      justify-content: center;
      color: $secondary;
    }
  }
</style>
