import { writable } from "svelte/store"

export let products = writable([
  {
    sku: 1,
    emoji: "🍎",
    name: "Apples",
    unit: "kg",
    price: 3.45,
    quantity: 0,
  },
  {
    sku: 2,
    emoji: "🍇",
    name: "Grapes",
    unit: "kg",
    price: 8.95,
    quantity: 0,
  },
  {
    sku: 3,
    emoji: "🍐",
    name: "Pear",
    unit: "kg",
    price: 2.75,
    quantity: 0,
  },
  {
    sku: 4,
    emoji: "🍏",
    name: " Apple Grannysmith",
    unit: "kg",
    price: 6.89,
    quantity: 0,
  },
  {
    sku: 5,
    emoji: "🍎",
    name: "Apple Pink Lady",
    unit: "each",
    price: 3.25,
    quantity: 0,
  },
])
