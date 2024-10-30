<template>
  <div v-if="product" class="product-details">
    <div class="back-button-container">
      <button class="back-button" @click="goBack">← Back to Dashboard</button>
    </div>

    <div class="product-content">
      <div class="left-section">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>

        <!-- Carousel Container -->
        <div class="carousel-container">
          <Carousel ref="carousel" :wrap-around="true" class="my-carousel">
            <Slide v-for="(slide, index) in slides" :key="index">
              <img :src="slide.url" alt="Slide Image" class="product-image" />
            </Slide>
          </Carousel>

          <!-- Left Navigation Button -->
          <button class="carousel-button prev-button" @click="goPrev">
            <ArrowLongLeftIcon class="icon" />
          </button>

          <!-- Right Navigation Button -->
          <button class="carousel-button next-button" @click="goNext">
            <ArrowLongRightIcon class="icon" />
          </button>
        </div>

        <div class="description">
          <p class="mt-4">{{ product.description }}</p>
        </div>
      </div>

      <!-- Right section for product details -->
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
          <select v-model="selectedColor">
            <option v-for="color in Object.keys(selectedVariation.colors)" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>

        <!-- Dynamic Price Display -->
        <p class="text-xl font-semibold mt-4" v-if="selectedVariation">Price: {{ selectedVariation.price }} €</p>

        <!-- Add to Cart Button -->
        <button class="add-to-cart-button" @click="handleAddToCart" v-if="selectedVariation && selectedColor">
          Add to Cart
        </button>

        <!-- Custom Popup Alert -->
        <div v-if="showAlert" class="popup-alert">
          <p>{{ product.name }} {{ selectedVariation.id }} ({{ selectedColor }}) has been added to your cart!</p>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchProductDetails } from '../composables/productsFetch';
import { useShoppingCart } from '../composables/shoppingCartConfig.js';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline';

const product = ref(null);
const variations = ref([]);
const selectedVariation = ref(null);
const selectedColor = ref(null);
const imageUrls = ref([]); // All variation images
const slides = ref([]); // Define slides here
const showAlert = ref(false);

const route = useRoute();
const router = useRouter();

// Carousel navigation functions
const carousel = ref(null);

function goPrev() {
  carousel.value.prev();
}

function goNext() {
  carousel.value.next();
}

// Use the shopping cart composable
const { addToCart } = useShoppingCart();

onMounted(async () => {
  const productId = route.params.id;

  // Fetch all necessary product details
  const details = await fetchProductDetails(productId);

  // Set reactive data properties
  product.value = details.product.value;
  variations.value = details.variations.value;
  selectedVariation.value = details.selectedVariation.value;
  selectedColor.value = details.selectedColor.value;
  imageUrls.value = details.imageUrls.value;

  // Populate `slides` with image URLs
  slides.value = imageUrls.value.map(url => ({ url: url.url }));
});

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
      imageUrl: slides.value[0]?.url || '', // Use `url` instead of `src`
    });

    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 3000);
  }
};
</script>



<style scoped>

.carousel-container {
  position: relative;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;  /* Set width and height for the button */
  height: 40px;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.icon {
  width: 24px;
  height: 24px;
}


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
