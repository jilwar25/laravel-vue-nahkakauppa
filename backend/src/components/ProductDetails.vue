<template>
    <div v-if="product" class="product-details">
      <div class="back-button-container">
        <button class="back-button" @click="goBack">← Back to Dashboard</button>
      </div>
  
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <img :src="imageUrl" alt="Product image" class="product-image mt-4" />
  
      <div class="description">
        <p class="mt-4">{{ product.description }}</p>
      </div>
  
      <p class="text-xl font-semibold mt-4">Price: ${{ product.price }}</p>
  
      <!-- Add to Cart Button -->
      <button class="add-to-cart-button" @click="handleAddToCart">Add to Cart</button>
  
      <!-- Custom Popup Alert -->
      <div v-if="showAlert" class="popup-alert">
        <p>{{ product.name }} has been added to your cart!</p>
      </div>
    </div>
  
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';  
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
  import { useShoppingCart } from '../composables/shoppingCartConfig.js';  // Importing the cart composable
  
  const product = ref(null);
  const imageUrl = ref(null);
  const showAlert = ref(false);
  const route = useRoute();
  const router = useRouter();
  const db = getFirestore();
  const storage = getStorage();
  
  // Fetch product details
  const fetchProductDetails = async () => {
    const productId = route.params.id;
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);
  
    if (productSnap.exists()) {
      const productData = productSnap.data();
      product.value = productData;
  
      if (productData.imagePath) {
        const storageReference = storageRef(storage, productData.imagePath);
        imageUrl.value = await getDownloadURL(storageReference);
      }
    } else {
      console.log('Product not found');
    }
  };
  
  // Use the shopping cart composable
  const { addToCart } = useShoppingCart();  // Extracting addToCart from the composable
  
  // Navigate back to dashboard
  const goBack = () => {
    router.push('/dashboard');
  };
  
  // Handle adding to cart
  const handleAddToCart = () => {
    if (product.value) {
      addToCart({
        id: product.value.id,
        name: product.value.name,
        price: product.value.price,
        imageUrl: imageUrl.value,
      });
  
      // Show alert for 3 seconds
      showAlert.value = true;
      setTimeout(() => {
        showAlert.value = false;
      }, 3000);
    }
  };
  
  onMounted(() => {
    fetchProductDetails();
  });
  </script>
  
  <style scoped>
  .product-details {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .product-image {
    width: 100%;
    height: auto;
  }
  
  .back-button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    width: 100%;
  }
  
  .back-button {
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #ff4f41;
  }
  
  /* Add to Cart Button */
  .add-to-cart-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .add-to-cart-button:hover {
    background-color: #218838;
  }
  
  /* Custom Popup Alert Styling */
  .popup-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #28a745;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: fadeInOut 0.3s ease-in-out;
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .description {
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-height: 200px;
    overflow-y: auto;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  </style>
  