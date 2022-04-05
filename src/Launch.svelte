<script>
  import { authorize } from "openehr-client";
  import { onMount } from "svelte";

  onMount(async () => {
    authorize({
      clientId: "openehr-client",
      redirectUri: "http://localhost:8080/app",
      iss: "https://vt-fi-a-app.dips.local/DIPS-SmartEHR",
      scope: "openid profile",
      launch: "2008903:encounter:resource",
    });
  });
</script>

Loading...
