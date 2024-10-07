<template>
    <transition name="transitionPopUp">
      <div v-if="visible" class="popup-overlay" @click="handleOverlayClick">
        <div class="popup-content" @click.stop>
          <button class="popup-close" @click="closeCart">X</button>
          <h2>Your Cart</h2>
          <!-- Add your cart content here -->
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineEmits, defineProps } from 'vue';
  
  // Props to control visibility
  const props = defineProps({
    visible: {
      type: Boolean,
      required: true,
    },
  });
  
  // Emits an event to update visibility
  const emit = defineEmits(['update:visible']);
  
  // Close the cart when the overlay is clicked
  const handleOverlayClick = () => {
    closeCart();
  };
  
  // Closes the cart popup
  const closeCart = () => {
    emit('update:visible', false);
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background: #fff;
    width: 30%;
    height: 100%;
    padding: 20px;
    position: relative;
    border-radius: 8px 0 0 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  /* Transitions for smooth entry and exit */
  .transitionPopUp-enter-active,
  .transitionPopUp-leave-active {
    transition: transform 0.8s ease-out, opacity 0.3s ease-out;
  }
  
  .transitionPopUp-enter-from,
  .transitionPopUp-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  
  .transitionPopUp-enter-to,
  .transitionPopUp-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
  </style>
  