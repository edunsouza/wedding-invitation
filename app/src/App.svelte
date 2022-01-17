<script>
  import { Router, Route } from 'svelte-navigator';
  import Home from './pages/Home.svelte';
  import Invite from './pages/Invite.svelte';
  import NotFound from './pages/NotFound.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path=":guest" component={Invite} />
  <Route component={NotFound} />
</Router>

<style lang="scss">
  :global(body) {
    background-color: $light;
  }
</style>
