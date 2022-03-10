<script setup lang="ts">
import { LoginStore } from "../../../store/login-session";
import { ref } from "vue";

const loginStore = LoginStore();
const username = ref("");
const password = ref("");

function login() {
  loginStore.Login(username.value, password.value);
}
</script>

<template>
  <div class="field">
    <p><strong>Username</strong></p>
    <p class="control has-icons-left has-icons-right">
      <input
        class="input"
        type="email"
        placeholder="Type your username"
        v-model="username"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <!-- Change this icon later to only be visible if username is valid -->
        <i class="fas fa-check"></i>
      </span>
    </p>
  </div>

  <div class="field">
    <p><strong>Password</strong></p>
    <p class="control has-icons-left">
      <input
        class="input"
        type="password"
        placeholder="Type your password"
        v-model="password"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <!-- forgot password needs to be a router link to a form eventually -->
  <div class="field">
    <a href="#">Forgot password?</a>
  </div>

  <div class="field">
    <div class="section">
      <p class="control">
        <button
          class="button is-info is-fullwidth is-rounded login-brand"
          @click="login"
        >
          Login
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.section {
  text-align: center;
  padding: 1rem 1rem;
}
</style>
