<script lang="ts">
    import {inputText} from './store'
    import {createQuery} from '../createQuery'

  $: createQuery($inputText);
</script>

<div class="input-container">
    <p>Smart Query:</p>
    <input type="text" bind:value={$inputText}/>
  </div>

<style>
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
</style>