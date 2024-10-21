<template>
    <div class="checkout">
      <h1>Checkout</h1>
      <p>Proceed with your purchase here!</p>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.quantity }} x ${{ item.price }}
        </li>
      </ul>
      <p>Total: ${{ totalAmount }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useShoppingCart } from '../composables/shoppingCartConfig'; // Import cart logic
  
  // Use shopping cart composable
  const { cartItems } = useShoppingCart();
  
  // Compute total amount
  const totalAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });
  </script>
  
  <style scoped>
  .checkout {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  </style>
  