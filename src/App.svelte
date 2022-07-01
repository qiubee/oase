<script lang="ts">
  import Router from "svelte-spa-router"
  import routes from "./routes"
  import { replace } from "svelte-spa-router"
  import { loggedIn, onboard } from "./store";

  // check login state
  if ($loggedIn) {
    if ($onboard) {
      replace("/account-instellen")
    } else {
      replace("/")
    }
  } else {
    replace("/login")
  }
</script>

<div>
  <Router {routes}/>
</div>

<style>
  div {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
</style>
