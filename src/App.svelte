<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Launch from "./Launch.svelte";
  import Index from "./Index.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/">
    <Launch />
  </Route>
  <Route path="/app">
    <Index />
  </Route>
</Router>
