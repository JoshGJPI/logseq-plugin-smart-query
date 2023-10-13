<script lang="ts">
  // import Repl from "./Repl.svelte";

  let inner: Element;
  let show = true;
  let query = `[:find (pull ?h [*])
            :where
            [?h :block/marker ?marker]
            [(contains? #{"NOW" "DOING"} ?marker)]]`;

  top.document?.addEventListener("visibilitychange", async () => {
    const visibilityState = top?.document?.visibilityState === 'visible';
    show = visibilityState;
  });

  const clickOutside = (e: Event) => {
    if (!inner.contains(e.target as any)) {
      window.logseq.hideMainUI();
    }
  };

  console.log("===Smart Query Launch ===");
</script>

{#if show}
  <p>Show is true</p>
{/if}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<main on:click={clickOutside}>
  <div bind:this={inner} class="inner">
    <h2>Hellow LogSeq</h2>
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

  .inner {
    border: 3px solid #000;
    background: #eee;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 20px #888;
  }
</style>
