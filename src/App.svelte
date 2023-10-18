<script lang="ts">
    import QueryInput from "./lib/QueryInput.svelte";

  let inner: Element;
  let query = `[:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "DOING"} ?marker)]]`;

  const clickOutside = (e: Event) => {
    if (!inner.contains(e.target as any)) {
      window.logseq.hideMainUI();
    }
  };


</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click={clickOutside}>
  <div bind:this={inner} class="container" id="smart-query-container">
    <QueryInput/>
    <button>Submit</button>
  </div>
</main>


<style>
  main {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
  }

  .container {
    position: fixed;
    top: 48px;
    background-color: azure;
    box-shadow: 0px 0.25rem 0.5rem 0px rgb(0, 43, 54);
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    color: azure;
    background-color: steelblue;
    padding: 0.8rem;
  }

</style>
