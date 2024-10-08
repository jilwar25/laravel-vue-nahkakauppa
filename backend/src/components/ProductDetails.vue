<template>
    <div v-if="product" class="product-details">
      <!-- Align back button with the image -->
      <div class="back-button-container">
        <button class="back-button" @click="goBack">← Back to Dashboard</button>
      </div>
  
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <img :src="imageUrl" alt="Product image" class="product-image mt-4" />
  
      <!-- Description Section -->
      <div class="description">
        <p class="mt-4">{{ product.description }}</p>
      </div>
  
      <p class="text-xl font-semibold mt-4">Price: ${{ product.price }}</p>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';  // useRouter for navigation
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
  
  const product = ref(null);
  const imageUrl = ref(null);
  const route = useRoute();
  const router = useRouter(); // Initialize router for navigation
  const db = getFirestore();
  const storage = getStorage();
  
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
  
  // Function to navigate back to the dashboard
  const goBack = () => {
    router.push('/dashboard');
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
    width: 100%; /* Reduce size by 30% */
    height: auto;
  }
  
  /* Ensure the back button is aligned with the right end of the image */
  .back-button-container {
    display: flex;
    justify-content: flex-end; /* Align button to the right */
    margin-top: 10px; /* Add some space above the button */
    width: 100%; /* Ensure container width matches the image width */
  }
  
  /* Back button styling */
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
  