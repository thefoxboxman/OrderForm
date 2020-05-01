<script>
  import { orderedItems } from "../orderedItems.js"
  export let Item = {}

  const removeItem = () => {
    $orderedItems = $orderedItems(item => orderedItems.sku != item.id)
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
  .btn {
    margin-top: 0.5em;
    background-color: orangered;
    color: whitesmoke;
    cursor: pointer;
  }
</style>

<div class="orderItem">
  <div>
    #{Item.sku} {Item.name} ${Item.price}/{Item.unit} Quantity {Item.quantity}
  </div>
  <button class="btn" on:click={removeItem}>Remove</button>
</div>
