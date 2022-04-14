<script setup lang="ts">
import BaseButton from "../UI/BaseButton.vue";
import { RouterLink } from "vue-router";
import { LoginStore } from "../../models/store/login-session";

const loginStore = LoginStore();

function logout() {
  loginStore.Logout();
}

const props = defineProps({ display: String });
</script>
<template>
  <div class="navbar-menu" :class="display" id="nav-links">
    <div class="navbar-start">
      <RouterLink to="/home" class="navbar-item"
        ><strong>Home</strong></RouterLink
      >
      <RouterLink to="/todo" class="navbar-item"
        ><strong>Messages</strong></RouterLink
      >
      <RouterLink to="/friendslist" class="navbar-item"
        ><strong>Friends List </strong>

        <span class="icon">
          <i class="fas fa-bell"></i>
        </span>
        <!-- Place a v-if here and change the number to the length of the currently logged in users pendingRequests list -->
        <span class="tag is-danger">
          {{ 2 }}
        </span>
      </RouterLink>

      <RouterLink to="/budget" class="navbar-item"
        ><strong>Budget</strong></RouterLink
      >
    </div>
    <div v-if="loginStore.isLoggedIn" class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" @click="logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#nav-links .navbar-start .navbar-item:hover,
#nav-links .navbar-start .navbar-item:focus {
  background-color: #d4e6f1;
  color: black;
}

.modal-enter-active {
  animation: link 0.5s ease-out;
}

.navbar-menu.is-active {
  animation: modal 0.5s ease-in;
}

@keyframes modal {
  from {
    opacity: 0;
    /* transform: translateY(-50px) scale(0.9); */
  }

  to {
    opacity: 1;
    /* transform: translateY(0) scale(1); */
  }
}
</style>
