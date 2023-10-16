<script lang="ts">
    import { onMount } from "svelte";

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

  let focusRef;

  onMount(() => {
    focusRef.focus();
  });

  let inputText :string;

  $: console.log(inputText);

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
    <div class="input-container">
      <p>Smart Query:</p>
      <input type="text" bind:value={inputText} bind:this={focusRef}/>
    </div>
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
  }

  .container {
    position: fixed;
    top: 50px;
    left: 0;
    background-color: azure;
    box-shadow: 0px 0.25rem 0.5rem 0px darkolivegreen;
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .input-container {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    padding-left: 0.5rem;
  }

  input {
    font-size: 1.25rem;
    border: none;
    margin: 0 0.5rem;
    width: 600px;
    background-color: transparent;
  }

  button {
    height: 40px;
    border: none;
    color: azure;
    background-color: darkslategray;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
</style>
