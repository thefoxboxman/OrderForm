import { writable } from "svelte/store"

export let products = writable([
  { sku: 1, name: "Apples", unit: "kg", price: 3.45, quantity: 0 },
  { sku: 2, name: "Grapes", unit: "kg", price: 8.95, quantity: 0 },
  { sku: 3, name: "Pear", unit: "kg", price: 2.75, quantity: 0 },
  { sku: 4, name: "Peach", unit: "kg", price: 6.89, quantity: 0 },
])
