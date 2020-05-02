<script>
  import { orderedItems } from "../orderedItems.js"
  export let Item = {}

  const removeItem = () => {
    $orderedItems = $orderedItems.filter(thing => Item.sku != thing.sku)
  }
</script>

<style>
  .orderItem {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 0.5em;
    border: 2px solid black;
  }
  input {
    width: 50px;
    color: red;
    text-align: center;
  }
  .btn {
    margin-top: 0.5em;
    background-color: orangered;
    color: whitesmoke;
    cursor: pointer;
  }
</style>

<div class="orderItem">
  <div>
    #{Item.sku} {Item.name} ${Item.price}/{Item.unit}
    <div>
      Quantity Ordered: {Item.quantity} Total: ${(Item.quantity * Item.price).toFixed(2)}
    </div>
    <div>
      Change Quantity:
      <input bind:value={Item.quantity} />
    </div>
  </div>
  <button class="btn" on:click={removeItem}>Remove from Cart</button>
</div>
