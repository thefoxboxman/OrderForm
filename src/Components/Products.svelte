<script>
  import { products } from "../products.js"
  import Product from "./Product.svelte"
</script>

<style>
  section {
    margin-top: 2rem;
    border: 2px solid red;
  }
  .productList {
    width: 90%;
    margin: 0 auto;
  }
</style>

<section>
  <div class="productList">
    <h1>These are the Products</h1>
    {#each $products as product}
      <Product {product} />
    {/each}

  </div>
</section>
