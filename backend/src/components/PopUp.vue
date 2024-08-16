<template>
  <div class="popup-overlay" v-show="visible" @click="handleOverlayClick">
    <Transition name="transitionPopUp" @after-enter="resetTransition">
      <div class="popup-content" v-show="visible" @click.stop>
        <button class="popup-close" @click="closePopup">>></button>
        <component :is="currentForm" @switch-form="switchForm" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { shallowRef, defineEmits, defineProps } from 'vue';
import Login from './Login.vue';
import Register from './Register.vue';

const props = defineProps({
  visible: Boolean
});

const emit = defineEmits(['update:visible']);

const currentForm = shallowRef(Login);

const closePopup = () => {
  emit('update:visible', false);
};

const handleOverlayClick = () => {
  closePopup();
};

const switchForm = (formType) => {
  currentForm.value = formType === 'login' ? Login : Register;
};

const resetTransition = () => {
  // Function is intentionally left empty. You can add any needed logic here.
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: #fff;
  width: 30%;
  height: 100%;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.transitionPopUp-enter-active,
.transitionPopUp-leave-active {
  transition: transform 0.8s ease-out, opacity 0.3s ease-out;
}

.transitionPopUp-enter-from,
.transitionPopUp-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.transitionPopUp-enter-to,
.transitionPopUp-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
