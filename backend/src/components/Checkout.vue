<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <p>Proceed with your purchase here!</p>
    <div v-for="item in cartItems" :key="item.id" class="checkout-item">
      <div class="item-info">
        <img :src="item.imageUrl" alt="Product image" class="product-image" />
        <div class="item-details">
          <h3 class="product-name">{{ item.name }}</h3>
          <p class="product-description">{{ item.description }}</p>
          <p class="product-price">Price: ${{ item.price }}</p>
        </div>
      </div>
      <div class="item-actions">
        <div class="quantity-control">
          <!-- If quantity > 1, show the - button, else show the remove button -->
          <button v-if="item.quantity > 1" @click="updateQuantity(item, -1)" class="quantity-btn">-</button>
          <button v-else @click="removeFromCart(item)" class="remove-btn">
            <!-- Import TrashIcon for the remove button -->
            <TrashIcon class="h-5 w-5 text-white" />
          </button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="updateQuantity(item, 1)" class="quantity-btn">+</button>
        </div>
      </div>
    </div>
    <p class="total-amount">Total: ${{ totalAmount }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../plugins/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { useShoppingCart } from '../composables/shoppingCartConfig';

// Import TrashIcon from Heroicons
import { TrashIcon } from '@heroicons/vue/24/outline'; // For solid version

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const { cartItems, loadCart, updateQuantity, removeFromCart } = useShoppingCart();

const fetchProductDetails = async (cartItem) => {
  try {
    const productRef = doc(db, 'products', cartItem.id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const productData = productSnap.data();
      cartItem.name = productData.name;
      cartItem.description = productData.description;
      cartItem.price = productData.price;

      if (productData.imagePath) {
        const storageReference = storageRef(storage, productData.imagePath);
        cartItem.imageUrl = await getDownloadURL(storageReference);
      }
    } else {
      console.log('Product not found:', cartItem.id);
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

const fetchCartDetails = async () => {
  for (const item of cartItems.value) {
    await fetchProductDetails(item);
  }
};

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

onMounted(() => {
  loadCart();
  fetchCartDetails();
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

.checkout-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.item-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.item-details {
  margin-left: 10px;
}

.item-actions {
  display: flex;
  align-items: center;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity {
  margin: 0 15px;
}

.quantity-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px; /* Added to round the edges */
}

.quantity-btn:hover {
  background-color: #0056b3;
}

.remove-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; /* Added to round the edges */
}

.remove-btn:hover {
  background-color: #cc0000;
}


.total-amount {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
}
</style>
