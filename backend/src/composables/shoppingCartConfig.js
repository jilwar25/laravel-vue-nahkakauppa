import { computed, ref } from 'vue';

const cartItems = ref([]);

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});

// Load cart from localStorage
const loadCart = () => {
  cartItems.value = JSON.parse(localStorage.getItem('shoppingCart')) || [];
};

// Save cart to localStorage
const saveCart = () => {
  localStorage.setItem('shoppingCart', JSON.stringify(cartItems.value));
};

// Add an item to the cart with variations (quality, color, price)
const addToCart = (product) => {
  const existingItem = cartItems.value.find(
    (item) =>
      item.id === product.id &&
      item.variation.quality === product.variation.quality &&
      item.variation.color === product.variation.color
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({ ...product, quantity: 1 });
  }

  saveCart();
};



// Remove an item from the cart
const removeFromCart = (product) => {
  cartItems.value = cartItems.value.filter(item => 
    !(item.id === product.id &&
      item.variation.quality === product.variation.quality &&
      item.variation.color === product.variation.color)
  );
  saveCart();
};

// Update the quantity of an item (considering variations)
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

export function useShoppingCart() {
  return {
    cartItems,
    loadCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalAmount,
  };
}
