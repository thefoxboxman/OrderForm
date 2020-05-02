<script>
  import { orderedItems } from "../orderedItems.js"
  export let product = {}

  const buyProduct = () => {
    for (let item of $orderedItems) {
      if (item.sku == product.sku) {
        item.quantity = product.quantity
        $orderedItems = $orderedItems
        return
      }
    }

    $orderedItems = [...$orderedItems, product]
    // document.getElementById("buyButton").innerText = "Update Cart"
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
  input {
    width: 30px;
    color: green;
    text-align: right;
  }

  #buyButton {
    margin-top: 0.5em;
    background-color: green;
    color: whitesmoke;
    cursor: pointer;
  }
</style>

<div class="product">
  <div class="item">
    {#if product.unit == 'kg'}
      #{product.sku} {product.name} ${product.price}/{product.unit} Enter
      quantity required:
      <input bind:value={product.quantity} />
      Total: ${(product.quantity * product.price).toFixed(2)}
    {:else}
      #{product.sku} {product.name} ${product.price}/{product.unit} Enter
      quantity required:
      <input bind:value={product.quantity} />
      Total: ${(product.quantity * product.price).toFixed(2)}
    {/if}

  </div>

  <button id="buyButton" class="btn" on:click={buyProduct}>Add to Cart</button>

</div>
