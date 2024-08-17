<template>
  <div class="mt-4">
    <!-- The container for FirebaseUI -->
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

// Import your Firebase configuration
import firebaseConfig from '../plugins/firebaseConfig';

const props = defineProps({
  isLoggedIn: Boolean
});

const emit = defineEmits(['login']);

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const user = ref(null);

// Define FirebaseUI configuration
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: 'http://localhost:5173',
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: 'select_account'
      },
      fullLabel: "Kirjaudu sisään Googlella"
    }
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      user.value = authResult.user.displayName;
      emit('login', true); // Emit the login event to parent component
      return false; // Prevent redirect
    }
  }
};

// Handle FirebaseUI initialization
onMounted(() => {
  let ui = firebaseui.auth.AuthUI.getInstance();
  if (!ui) {
    ui = new firebaseui.auth.AuthUI(auth);
  }
  ui.start('#firebaseui-auth-container', uiConfig);
});

// Clean up on component unmount
onBeforeUnmount(() => {
  const ui = firebaseui.auth.AuthUI.getInstance();
  if (ui) {
    ui.reset();
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
