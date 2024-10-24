<template>
  <div>
    <h2 class="products-heading">Products</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link">
          <img :src="product.imageUrl" alt="Product image" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
        </router-link>

        <!-- The product description that appears on hover -->
        <div class="product-description">{{ product.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../plugins/firebaseConfig';
import { initializeApp } from 'firebase/app';

// Initialize Firebase with your firebaseConfig
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Ref to hold the products
const products = ref([]);

// Function to fetch products from Firestore and images from Storage
const fetchProducts = async () => {
  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    const productList = [];
    for (const doc of productsSnapshot.docs) {
      const productData = doc.data();
      // Get image URL from Firebase Storage
      const imageUrl = await getDownloadURL(storageRef(storage, productData.imagePath));
      
      productList.push({
        id: doc.id,
        name: productData.name,
        description: productData.description,
        imageUrl: imageUrl,
      });
    }
    products.value = productList;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Fetch products when component is mounted
onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.products-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 2px solid #ddd;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: 48%;
  position: relative;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  overflow: hidden; /* Ensures the description stays inside the product container */
}

.product-item:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: auto;
  transition: filter 0.3s ease; /* Smooth transition for darkening */
}

.product-item:hover .product-image {
  filter: brightness(50%); /* Darken the image by reducing brightness */
}

/* Styling for the product name */
.product-name {
  position: absolute;
  top: 10px; /* Adjust this for desired spacing from the top */
  left: 10px; /* Adjust this for desired spacing from the left */
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6); /* Background to make text readable */
  padding: 5px 10px; /* Padding for text */
  border-radius: 4px; /* Optional rounded corners */
  z-index: 10; /* Ensure the name appears on top of the image */
}

/* Hover description */
.product-description {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  text-align: center;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 10;
}

.product-item:hover .product-description {
  display: block;
}
</style>
