<script>
  import Description from './Description.svelte';
  import FinalCountdown from './FinalCountdown.svelte';
</script>

<section>
  <FinalCountdown />
  <Description />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    position: relative;
  }
</style>
