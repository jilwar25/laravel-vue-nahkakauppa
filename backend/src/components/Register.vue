<template>
  <GuestLayout title="Rekisteröidy">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Sähköposti</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Salasana</label>
          </div>
          <div class="mt-2">
            <input v-model="password_1" id="password" name="password" type="password" autocomplete="new-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Salasana uudelleen</label>
          </div>
          <div class="mt-2">
            <input v-model="password_2" id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div v-if="errorMsg" class="text-red-500 text-sm">
          {{ errorMsg }}
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Rekisteröidy</button>
        </div>
      </form>

      <!-- Sign in with Google Button -->
      <SignWithGoogle />
    
      <p class="mt-10 text-center text-sm text-gray-500">
       Tai {{ ' ' }}
        <button @click="switchToLogin" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Kirjaudu sisään!</button>
      </p>
    </div>
  </GuestLayout>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import GuestLayout from "../components/GuestLayout.vue";
import SignWithGoogle from "./SignWithGoogle.vue";

const email = ref("");
const password_1 = ref("");
const password_2 = ref("");
const errorMsg = ref("");

const emit = defineEmits(['switch-form']);

const register = async () => {
  if (password_1.value !== password_2.value) {
    errorMsg.value = "Salasanat eivät mätsää!";
    return;
  }

  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password_1.value);
    console.log("User registered:", userCredential.user);

    // Send a verification email to the newly registered user
    await sendEmailVerification(userCredential.user);
    alert("Vahvistusviesti on lähetetty sähköpostiisi. Tarkista postilaatikkosi.");

    // Clear the form fields after registration
    email.value = "";
    password_1.value = "";
    password_2.value = "";
    errorMsg.value = "";
  } catch (error) {
    console.error("Registration error:", error);
    
    // Handle various Firebase Auth errors
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMsg.value = "Tämä sähköposti on jo käytössä.";
        break;
      case 'auth/invalid-email':
        errorMsg.value = "Sähköpostiosoite ei ole kelvollinen.";
        break;
      case 'auth/operation-not-allowed':
        errorMsg.value = "Rekisteröinti ei ole tällä hetkellä sallittu.";
        break;
      case 'auth/weak-password':
        errorMsg.value = "Salasana on liian heikko.";
        break;
      default:
        errorMsg.value = "Tapahtui virhe. Yritä uudelleen.";
        break;
    }
  }
};

const switchToLogin = () => {
  emit('switch-form', 'login');
};
</script>
