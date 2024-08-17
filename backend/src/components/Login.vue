<template>
  <GuestLayout title="Kirjaudu sisään">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Sähköposti</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Salasana</label>
            <div class="text-sm">
              <router-link :to="{ name: 'requestPassword' }" class="font-semibold text-indigo-600 hover:text-indigo-500">Unohdit salasanan?</router-link>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password_1" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <p v-if="errorMsg" class="text-red-600 text-sm">{{ errorMsg }}</p>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirjaudu sisään</button>
        </div>
      </form>

      <!-- Sign in with Google Button -->
      <SignWithGoogle />

      <p class="mt-10 text-center text-sm text-gray-500">
        Etkö ole käyttäjä? {{ ' ' }}
        <button @click="switchToRegister" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Rekisteröidy tästä!</button>
      </p>
    </div>
  </GuestLayout>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GuestLayout from "../components/GuestLayout.vue";
import SignWithGoogle from "./SignWithGoogle.vue";

const email = ref("");
const password_1 = ref("");
const errorMsg = ref(""); // Initialize as an empty string

const emit = defineEmits(['switch-form']);

const login = async () => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password_1.value);
    console.log("User signed in:", userCredential.user);
    email.value = "";
    password_1.value ="";
  } catch (error) {
    console.log("Login error:", error.code);
    switch (error.code) {
      case "auth/invalid-email":
        errorMsg.value = "Epäsopiva Sähköposti";
        break;
      case "auth/user-not-found":
        errorMsg.value = "Käyttäjää ei löydetty";
        break;
      case "auth/invalid-credential":
      case "auth/wrong-password":
        errorMsg.value = "Väärä sähköposti tai salasana";
        break;
      default:
        errorMsg.value = "Kirjautumisessa tapahtui virhe";
        break;
    }
  }
};

const switchToRegister = () => {
  emit('switch-form', 'register');
};
</script>
