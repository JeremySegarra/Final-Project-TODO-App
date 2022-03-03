<template>
  <div class="navbar-menu" :class="display" id="nav-links">
    <div class="navbar-start">
      <a href="#" class="navbar-item"><strong>Home</strong></a>
      <a href="#" class="navbar-item"><strong>To Do</strong></a>
      <a href="#" class="navbar-item"><strong>Budget</strong></a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <BaseButton>Logout</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../UI/BaseButton.vue";

const props = defineProps({ display: String });
</script>

<style scoped>
#nav-links .navbar-start .navbar-item:hover,
#nav-links .navbar-start .navbar-item:focus {
  background-color: #d4e6f1;
  color: black;
}

.modal-enter-active {
  animation: link 0.3s ease-out;
}

.navbar-menu.is-active {
  animation: modal 0.3s ease-in;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
