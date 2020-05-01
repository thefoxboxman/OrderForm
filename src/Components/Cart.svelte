<script>
  // import { writable } from "svelte/store"
  import { orderedItems } from "../orderedItems.js"
  import OrderedItems from "./OrderedItems.svelte"

  // import { listItems } from "./OrderedItems.svelte"
</script>

<style>
  section {
    margin-top: 2rem;
    border: 2px solid red;
  }
  .orderList {
    width: 90%;
    margin: 0 auto;
  }
</style>

<section>
  <div class="orderList">
    <h1>This is the Cart</h1>
    {#each $orderedItems as Item}
      <OrderedItems {Item} />
    {/each}

  </div>
</section>
