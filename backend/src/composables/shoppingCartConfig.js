import { computed, ref } from 'vue';
import { db } from '../plugins/firebaseConfig'; // Oletus Firebase-kokoonpanosta
import { doc, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'; // Firestore-importit

const cartItems = ref([]);
const storage = getStorage();

// Lasketaan ostoskorin kokonaissumma
const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

// Haetaan kuvat tietokannasta
const fetchImageForColor = async (productId, color) => {
  try {
    const fileName = `${productId}_${color}.jpg`;
    const storageReference = storageRef(storage, `products/colors/${fileName}`);
    return await getDownloadURL(storageReference);
  } catch (error) {
    console.error("Error fetching image for color:", color, error);
    return null;
  }
};

// Ladataan ostoskorin tiedot `localStorage`:sta
const loadCart = () => {
  const storedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  cartItems.value = storedCart.map((item) => ({
    ...item,
    price: item.price || 0, // Varmistetaan, että hinnalla on arvo
  }));
};

// Tallennetaan ostoskorin tiedot `localStorage`:iin
const saveCart = () => {
  localStorage.setItem('shoppingCart', JSON.stringify(cartItems.value));
};

// Haetaan tuotteen hinta Firebasesta variaation dokumentti-ID:n perusteella
const fetchPrice = async (productId, quality) => {
  console.log("Fetching price for:", productId, quality); // Tarkistus

  try {
    // Hakee dokumentin `quality`-dokumentti-ID:n avulla `variations`-alikokoelmasta
    const variationDocRef = doc(db, `products/${productId}/variations`, quality);
    const variationDocSnap = await getDoc(variationDocRef);

    if (variationDocSnap.exists()) {
      const price = variationDocSnap.data().price;
      console.log("Fetched price from Firebase:", price); // Tarkistus
      return price;
    } else {
      console.error('Variation document not found.');
      return 0;
    }
  } catch (error) {
    console.error('Error fetching price:', error);
    return 0;
  }
};

// Lisätään tuote ostoskoriin
const addToCart = async (product) => {
  console.log("image" + selectedImageUrl);
  // Haetaan hinta Firebasesta laadun perusteella
  const price = await fetchPrice(product.id, product.variation.quality);
  
  // Tarkistetaan, onko tuote jo ostoskorissa samalla laadulla ja värillä
  const existingItem = cartItems.value.find(
    (item) =>
      item.id === product.id &&
      item.variation.quality === product.variation.quality &&
      item.variation.color === product.variation.color
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({ ...product, price, quantity: 1 }); // Lisätään hinta ja määrä tuotteeseen
  }
  console.log("Current cart items:", cartItems.value); // Tarkistus
  saveCart();
};

// Poistetaan tuote ostoskorista
const removeFromCart = (product) => {
  cartItems.value = cartItems.value.filter(item => 
    !(item.id === product.id &&
      item.variation.quality === product.variation.quality &&
      item.variation.color === product.variation.color)
  );
  saveCart();
};

// Päivitetään tuotteen määrä ostoskorissa
const updateQuantity = (product, change) => {
  const item = cartItems.value.find(item => 
    item.id === product.id &&
    item.variation.quality === product.variation.quality &&
    item.variation.color === product.variation.color
  );

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(product);
    } else {
      saveCart();
    }
  }
};

// Ostoskorin käyttöfunktiot
export function useShoppingCart() {
  return {
    fetchImageForColor,
    cartItems,
    loadCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalAmount,
  };
}
