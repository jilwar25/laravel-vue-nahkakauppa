<template>
  <transition name="transitionPopUp">
    <div v-if="visible" class="popup-overlay" @click="handleOverlayClick">
      <div class="popup-content" @click.stop>
        <button class="popup-close" @click="closeCart">X</button>
        <h2>Your Cart</h2>

        <!-- Cart Content -->
        <div v-if="groupedCartItems.length > 0">
          <ul class="cart-items">
            <li v-for="(item, index) in groupedCartItems" :key="index" class="cart-item">
              <img :src="item.imageUrl" alt="Product image" class="cart-item-image" />
              <div class="cart-item-info">
                <p class="cart-item-name">{{ item.quantity }} x {{ item.name }}</p>
                <p class="cart-item-price">Price: ${{ item.price * item.quantity }}</p>
                <div class="cart-item-quantity">
                  <!-- Update quantity buttons -->
                  <button @click="handleUpdateQuantity(item, -1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="handleUpdateQuantity(item, 1)">+</button>
                </div>
              </div>
            </li>
          </ul>

          <!-- Proceed to Checkout Button -->
          <button class="checkout-button" @click="proceedToCheckout">
            Proceed to Checkout
          </button>
        </div>
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { watch, defineEmits, defineProps, computed } from 'vue';
import { useShoppingCart } from '../composables/shoppingCartConfig'; // Import cart logic

// Props to control visibility
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

// Emits an event to update visibility
const emit = defineEmits(['update:visible']);

// Import cart logic from the composable
const { cartItems, loadCart, updateQuantity, removeFromCart } = useShoppingCart();

// Close the cart popup
const closeCart = () => {
  emit('update:visible', false);
};

// Close the cart when the overlay is clicked
const handleOverlayClick = () => {
  closeCart();
};

// Watch for visibility changes and load cart items from localStorage when the cart is opened
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      loadCart(); // Load the cart when the popup is shown
    }
  }
);

// Group cart items by product id and calculate the total quantity per product
const groupedCartItems = computed(() => {
  const grouped = {};

  // Group items by their id and accumulate the quantity
  cartItems.value.forEach((item) => {
    if (grouped[item.id]) {
      grouped[item.id].quantity += item.quantity;
    } else {
      grouped[item.id] = { ...item };
    }
  });

  // Return the grouped items as an array
  return Object.values(grouped);
});

// Handle updating item quantity in the cart
const handleUpdateQuantity = (item, change) => {
  if (item.quantity + change <= 0) {
    removeFromCart(item); // If quantity is 0 or less, remove the item
  } else {
    updateQuantity(item, change); // Update the quantity
  }
};

// Proceed to checkout logic
const proceedToCheckout = () => {
  closeCart(); // Close the cart popup
  router.push({ name: 'Checkout' }); // Navigate to checkout route
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

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.cart-item-image {
  width: 80px;
  height: auto;
  margin-right: 10px;
}

.cart-item-info {
  display: flex;
  flex-direction: column;
}

.cart-item-name {
  font-weight: bold;
}

.cart-item-price {
  color: #555;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.cart-item-quantity button {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cart-item-quantity button:hover {
  background-color: #ff4f41;
}

/* Checkout button styling */
.checkout-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #218838;
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
