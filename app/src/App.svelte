<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Invite from "./Invite.svelte";
  import NotFound from "./NotFound.svelte";
</script>

<main class="container">
  <Router>
    <Route path="/" component={Home} />
    <Route path=":guest" component={Invite} />
    <Route component={NotFound} />
  </Router>
</main>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    background: #e3e2dd;
  }
</style>
