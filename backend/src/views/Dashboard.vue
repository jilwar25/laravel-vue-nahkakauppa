<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center">
    <div class="w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Josali</h1>
      <p class="text-gray-600 mb-6">Tervetuloa nahkakaupan u.</p>

      <div class="flex justify-end mb-8">
        <!-- ShoppingCart popup -->
        <button
          @click="showCartPopup"
          class="bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
        >
          🛒 Open Cart
        </button>

        <ShoppingCartPopup
          :visible="showCart"
          @update:visible="showCart = $event"
        />
      </div>

      <!-- Dynamically load the component based on the current route -->
      <div class="bg-white shadow rounded-lg p-6">
        <router-view /> <!-- This will render Products or ProductDetails based on the route -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ShoppingCartPopup from '../components/ShoppingCartPopup.vue';

const showCart = ref(false);

const showCartPopup = () => {
  showCart.value = true;
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
