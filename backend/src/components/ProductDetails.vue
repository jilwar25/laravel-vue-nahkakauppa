<template>
  <div v-if="product" class="product-details">
    <div class="back-button-container">
      <button class="back-button" @click="goBack">← Back to Dashboard</button>
    </div>

    <div class="product-content">
      <div class="left-section">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <img :src="imageUrl" alt="Product image" class="product-image mt-4" />
        <div class="description">
          <p class="mt-4">{{ product.description }}</p>
        </div>
      </div>

      <div class="right-section">
        <!-- Variation Selection (e.g., Quality) -->
        <div class="variation-selection mt-4" v-if="variations.length > 0 && selectedVariation">
          <label for="variation">Choose a variation:</label>
          <select v-model="selectedVariation" @change="updateColorOptions">
            <option v-for="variation in variations" :key="variation.quality" :value="variation">
              {{ variation.quality }} - {{ variation.price }} €
            </option>



          </select>
        </div>

        <!-- Color Selection (handling Map instead of array) -->
        <div class="color-selection mt-4" v-if="selectedVariation && selectedVariation.colors">
          <label for="color">Choose a color:</label>
          <select v-model="selectedColor">
            <option v-for="color in Object.keys(selectedVariation.colors)" :key="color" :value="color">
              {{ color }} ({{ selectedVariation.colors[color] }} in stock)
            </option>
          </select>
        </div>

        <!-- Dynamic Price -->
        <p class="text-xl font-semibold mt-4" v-if="selectedVariation">Price: ${{ selectedVariation.price }}</p>

        <!-- Add to Cart Button -->
        <button class="add-to-cart-button" @click="handleAddToCart" v-if="selectedVariation && selectedColor">Add to Cart</button>

        <!-- Custom Popup Alert -->
        <div v-if="showAlert" class="popup-alert">
          <p>{{ product.name }} {{ selectedVariation.quality }} ({{ selectedColor }}) has been added to your cart!</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';  
import { getFirestore, doc, getDocs, collection, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import { useShoppingCart } from '../composables/shoppingCartConfig.js';  // Importing the cart composable

const product = ref(null);
const variations = ref([]); 
const selectedVariation = ref(null);  // Default to null to avoid accessing undefined properties
const selectedColor = ref(null);  // Default to null to avoid accessing undefined properties
const imageUrl = ref(null);
const showAlert = ref(false);
const route = useRoute();
const router = useRouter();
const db = getFirestore();
const storage = getStorage();

// Fetch product and variations
const fetchProductDetails = async () => {
  const productId = route.params.id;
  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    const productData = productSnap.data();
    product.value = { ...productData, id: productId }; // Add the product ID here

    // Fetch variations (quality and colors)
    const variationsSnap = await getDocs(collection(productRef, 'variations'));
    variations.value = variationsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (variations.value.length > 0) {
      selectedVariation.value = variations.value[0]; // Default to first variation
      selectedColor.value = Object.keys(selectedVariation.value.colors)[0]; // Default to first color
    }

    // Fetch the product image
    if (productData.imagePath) {
      const storageReference = storageRef(storage, productData.imagePath);
      imageUrl.value = await getDownloadURL(storageReference);
    }
  } else {
    console.log('Product not found');
  }
};

// Update the color options when a new variation is selected
const updateColorOptions = () => {
  if (selectedVariation.value) {
    selectedColor.value = Object.keys(selectedVariation.value.colors)[0]; // Reset to default color when variation changes
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
  if (product.value && selectedVariation.value && selectedColor.value) {
    addToCart({
      id: product.value.id,
      name: product.value.name,
      price: selectedVariation.value.price,
      variation: {  // Combine quality and color into the variation object
        quality: selectedVariation.value.quality,
        color: selectedColor.value,
      },
      quantity: 1, // Assuming you're adding 1 item at a time
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
/* Styling for the main layout */
.product-content {
  display: flex;
  justify-content: space-between;  /* Align left and right sections */
  margin-top: 25px;
}

/* Left section contains the image and description */
.left-section {
  width: 50%;  /* Adjust this as needed */
}

/* Right section for variation options, color options, and add-to-cart button */
.right-section {
  width: 45%;  /* Adjust this as needed */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 25px;  /* Margin below the back-to-dashboard button */
}

/* Image styling */
.product-image {
  width: 100%;
  height: auto;
}

/* Back button */
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
