<script>
  import { Link } from "svelte-navigator";
  import Header from "../components/Header.svelte";
  import AddressMap from "../components/AddressMap.svelte";
</script>

<section>
  <Header />
  <AddressMap />
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
