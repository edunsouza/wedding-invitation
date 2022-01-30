<script>
  import { Router, Route } from 'svelte-navigator';
  import smoothscroll from 'smoothscroll-polyfill';

  import Home from './pages/Home.svelte';
  import Invite from './pages/Invite.svelte';

  smoothscroll.polyfill();
</script>

<Router>
  <Route path=":guest" component={Invite} />
  <Route path="*" component={Home} />
</Router>

<style lang="scss">
  :global(body) {
    background-color: $light;
  }
</style>
