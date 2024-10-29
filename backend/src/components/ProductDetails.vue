<template>
  <div v-if="product" class="product-details">
    <div class="back-button-container">
      <button class="back-button" @click="goBack">← Back to Dashboard</button>
    </div>

    <div class="product-content">
      <div class="left-section">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>

        <!-- VueFlux Carousel for Color-based Image Selection -->
        <VueFlux v-if="rscs.length > 0" ref="$vueFlux" :images="rscs" :options="options" :transitions="transitions" />

        <div class="description">
          <p class="mt-4">{{ product.description }}</p>
        </div>
      </div>

      <div class="right-section">
        <!-- Variation Selection (e.g., Quality) -->
        <div class="variation-selection mt-4" v-if="variations.length > 0 && selectedVariation">
          <label for="variation">Choose a variation:</label>
          <select v-model="selectedVariation" @change="updatePriceAndColorOptions">
            <option v-for="variation in variations" :key="variation.id" :value="variation">
              {{ variation.id }}
            </option>
          </select>
        </div>

        <!-- Color Selection -->
        <div class="color-selection mt-4" v-if="selectedVariation && selectedVariation.colors">
          <label for="color">Choose a color:</label>
          <select v-model="selectedColor" @change="updateColorImages">
            <option v-for="color in Object.keys(selectedVariation.colors)" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>

        <!-- Dynamic Price Display -->
        <p class="text-xl font-semibold mt-4" v-if="selectedVariation">Price: {{ selectedVariation.price }} €</p>

        <!-- Add to Cart Button -->
        <button class="add-to-cart-button" @click="handleAddToCart" v-if="selectedVariation && selectedColor">Add to Cart</button>

        <!-- Custom Popup Alert -->
        <div v-if="showAlert" class="popup-alert">
          <p>{{ product.name }} {{ selectedVariation.id }} ({{ selectedColor }}) has been added to your cart!</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script setup>
import { VueFlux, Slide, Img } from 'vue-flux';
import { ref, reactive, shallowReactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getFirestore, doc, getDocs, collection, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import { useShoppingCart } from '../composables/shoppingCartConfig.js';

const product = ref(null);
const variations = ref([]);
const selectedVariation = ref(null);
const selectedColor = ref(null);
const rscs = shallowReactive([]);  // Dynamic image array for VueFlux
const showAlert = ref(false);
const route = useRoute();
const router = useRouter();
const db = getFirestore();
const storage = getStorage();

const options = reactive({
  allowFullscreen: false,
  allowToSkipTransition: false,
  autohideTime: 2500,
  autoplay: false,
  bindKeys: false,
  delay: 5000,
  enableGestures: false,
  infinite: false,
  lazyLoad: false,
  lazyLoadAfter: 3,
});

const transitions = shallowReactive([Slide]);

// Fetch product and variations
const fetchProductDetails = async () => {
  const productId = route.params.id;
  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    const productData = productSnap.data();
    product.value = { ...productData, id: productId };

    // Fetch variations with `quality` as document ID
    const variationsSnap = await getDocs(collection(productRef, 'variations'));
    variations.value = variationsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (variations.value.length > 0) {
      selectedVariation.value = variations.value[0];
      selectedColor.value = Object.keys(selectedVariation.value.colors)[0];
      updateColorImages(); // Update images for the default color
    }
  } else {
    console.log('Product not found');
  }
};

// Update images based on selected color
const updateColorImages = async () => {
  if (selectedVariation.value && selectedColor.value) {
    rscs.length = 0; // Clear current images

    const colorData = selectedVariation.value.colors[selectedColor.value];
    const imagePaths = Array.isArray(colorData.imagePaths) ? colorData.imagePaths : [colorData.imagePath];

    for (const path of imagePaths) {
      const storageReference = storageRef(storage, path);
      const url = await getDownloadURL(storageReference);
      rscs.push(new Img(url));
    }
  }
};

// Use the shopping cart composable
const { addToCart } = useShoppingCart();

// Navigate back to dashboard
const goBack = () => {
  router.push('/dashboard');
};

// Handle adding to cart
const handleAddToCart = async () => {
  if (product.value && selectedVariation.value && selectedColor.value) {
    await addToCart({
      id: product.value.id,
      name: product.value.name,
      variation: {
        quality: selectedVariation.value.id,
        color: selectedColor.value,
      },
      quantity: 1,
      imageUrl: rscs[0]?.src || '',
    });

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
/* Your styling remains the same */
</style>






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
