<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center">
    <div class="w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p class="text-gray-600 mb-6">Welcome to the dashboard. Here you can view your data.</p>
      <div class="flex justify-end mb-8">
        <button
          @click="handleSignOut"
          v-if="isLoggedIn"
          class="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
        >
          Kirjaudu ulos
        </button>
        <button
          @click="showLoginPopup"
          v-else
          class="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Kirjaudu sisään
        </button>
      </div>

      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Your Data Overview</h2>
        <!-- Add your dashboard content here -->
      </div>
    </div>

    <!-- Popup Wrapper for Login -->
    <PopupWrapper
      :visible="showLogin"
      @update:visible="showLogin = $event"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <!-- Login form content -->
    </PopupWrapper>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import PopupWrapper from '../components/PopUp.vue';

const isLoggedIn = ref(false);
const showLogin = ref(false);

const emit = defineEmits(['switch-form']);

const handleSignOut = async () => {
  try {
    await signOut(getAuth());
    isLoggedIn.value = false;
    emit('switch-form', 'login');
    console.log('User signed out');
  } catch (error) {
    console.error('Sign-out error:', error);
  }
};

const showLoginPopup = () => {
  showLogin.value = true; // Set visibility to true to show the popup
};

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
    showLogin.value = false;
  });
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
