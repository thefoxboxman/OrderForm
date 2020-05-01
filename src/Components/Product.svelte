<script>
  import { orderedItems } from "../orderedItems.js"
  export let product = {}

  const buyProduct = () => {
    for (let item of $orderedItems) {
      if (item.sku == product.sku) {
        item.quantity++
        $orderedItems = $orderedItems
        return
      }
    }
    // product.quantity = 1
    $orderedItems = [...$orderedItems, product]
  }
</script>

<style>
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 0.5em;
    border: 2px solid black;
  }

  .btn {
    margin-top: 0.5em;
    background-color: green;
    color: whitesmoke;
    cursor: pointer;
  }
</style>

<div class="product">
  <div class="item">
    #{product.sku} {product.name} ${product.price}/{product.unit} Quantity {product.quantity}
    <input bind:value={product.quantity} />
  </div>

  <button class="btn" on:click={buyProduct}>Add to Cart</button>

</div>
