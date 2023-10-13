<script lang="ts">
  // import Repl from "./Repl.svelte";

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

  let inputText :string;

  function createQuery(): void {
    //parse inputText string into separate values
    //build Dataloge query based on parsed values
    //paste query into contents.md file and show in right panel
  }

  //create event listener for 'enter' to run createQuery()

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click={clickOutside}>
  <div bind:this={inner} class="container">
    <input type="text" bind:value={inputText}/>
    <button on:click={createQuery}>Submit</button>
  </div>
</main>


<!-- <Repl bind:query={query} /> -->
<style>
  main {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    padding: 10vh 5vw;
    backdrop-filter: saturate(0.8) blur(10px);
  }

  .container {
    border: 3px solid #000;
    background: #eee;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 20px #888;
  }
</style>
