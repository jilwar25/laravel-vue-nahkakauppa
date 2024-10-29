// src/composables/productsFetch.js
import { ref } from 'vue';
import { getFirestore, doc, getDocs, collection, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const storage = getStorage();

export const fetchProductDetails = async (productId) => {
  const product = ref(null);
  const variations = ref([]);
  const selectedVariation = ref(null);
  const selectedColor = ref(null);
  const imageUrls = ref([]); // Lista kaikista kuvien URL:eista

  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    const productData = productSnap.data();
    product.value = { ...productData, id: productId };

    // Haetaan variaatiot `quality`-dokumentti-ID:nä
    const variationsSnap = await getDocs(collection(productRef, 'variations'));
    variations.value = variationsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (variations.value.length > 0) {
      selectedVariation.value = variations.value[0];
      selectedColor.value = Object.keys(selectedVariation.value.colors)[0];

      // Ladataan kaikki värikuvat `imageUrls`-taulukkoon
      for (const color in selectedVariation.value.colors) {
        const colorData = selectedVariation.value.colors[color];
        
        if (colorData && colorData.imagePath) {
          try {
            const storageReference = storageRef(storage, colorData.imagePath);
            const url = await getDownloadURL(storageReference);

            console.log(`Fetched image URL for color ${color}:`, url);
            imageUrls.value.push({ url}); // Lisätään URL imageUrls-taulukkoon
          } catch (error) {
            console.error(`Error fetching image for color ${color}:`, error);
          }
        }
      }
    }
  } else {
    console.log('Product not found');
  }

  return { product, variations, selectedVariation, selectedColor, imageUrls };
};
