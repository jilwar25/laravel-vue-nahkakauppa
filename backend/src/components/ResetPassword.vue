<template>
    <GuestLayout title="Aseta uusi salasana">
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="new-password" class="sr-only">New Password</label>
            <input id="new-password" name="password" type="password" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Uusi salasana"/>
          </div>
          <div>
            <label for="password-repeat" class="sr-only">Repeat Password</label>
            <input id="password-repeat" name="password_repeat" type="password" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Toista uusi salasana"/>
          </div>
        </div>
  
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link :to="{name: 'login'}" class="font-medium text-indigo-600 hover:text-indigo-500">
              Takaisin sisään kirjautumiseen
            </router-link>
          </div>
        </div>
  
        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute right-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

              </span>
            Lähetä
          </button>
        </div>
      </form>
    </GuestLayout>
  </template>
  
  <script setup>
  import GuestLayout from "../components/GuestLayout.vue";
  </script>