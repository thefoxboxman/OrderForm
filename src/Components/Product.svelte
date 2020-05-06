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
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-left: 0.5em;
    /* border: 2px solid black; */
  }
  input {
    width: 30px;
    color: green;
    text-align: right;
    margin-bottom: 0;
    padding: 0;
    /* border: 0 solid black; */
  }

  #buyButton {
    margin-top: 0.5em;
    margin-left: 1em;
    background-color: green;
    color: whitesmoke;
    cursor: pointer;
    max-width: 5rem;
  }
  .title {
    display: flex;

    /* border: 2px solid black; */
    flex-grow: 1;
    justify-content: right;
    align-items: center;
    margin-right: 1em;
    max-width: 15rem;
  }
  .order {
    display: flex;

    /* border: 2px solid black; */
    flex-grow: 1;
    color: green;
    align-items: center;
    min-width: 5rem;
    max-width: 15rem;
  }
  .emoji {
    display: inline-block;
    font-size: 1.5rem;
    margin: 0.1em;
  }

  .item p {
    margin: 0 0;
  }
</style>

<!-- ############################################## -->

<div class="product">

  <!-- {#if product.unit == 'kg'} -->
  <div class="item">

    <div class="title">
      <p class="emoji">{product.emoji}</p>
      <p>{product.name} ${product.price}/{product.unit}</p>
    </div>
    <div class="order">
      <p>Order:</p>
      <p>
        <input bind:value={product.quantity} />
        {product.unit}
      </p>
    </div>
    <!-- <div class="total">
        Total: ${(product.quantity * product.price).toFixed(2)}
      </div> -->
    <button id="buyButton" class="btn" on:click={buyProduct}>
      Add to Cart
    </button>
  </div>
  <!-- {:else}
    <div class="item">
      <p class="emoji">{product.emoji}</p>
      <div>
        <p>{product.name}</p>
        <p>${product.price}/{product.unit}</p>
        <p>
          Enter quantity required:
          <input bind:value={product.quantity} />
        </p>
        <p>
          {product.unit} Total: ${(product.quantity * product.price).toFixed(2)}
        </p>
      </div>
      <button id="buyButton" class="btn" on:click={buyProduct}>
        Add to Cart
      </button>
    </div>
  {/if}
-->
</div>

<!-- <button id="buyButton" class="btn" on:click={buyProduct}>Add to Cart</button> -->
