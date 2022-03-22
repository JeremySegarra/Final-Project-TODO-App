<script setup lang="ts">
import { LoginStore } from "../../../models/store/login-session";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const loginStore = LoginStore();
const username = ref("");
const password = ref("");
const eyeIsToggle = ref(false);

function login() {
  loginStore.Login(username.value, password.value);
}
function toggleEye() {
  console.log(eyeIsToggle.value);

  eyeIsToggle.value = !eyeIsToggle.value;
}

function preventEyeBall(event: any) {
  //Had to use mouse down event on the span for the eye icon and prevent the default so we dont lose focus
  //also had to pointer-events to all in CSS instead of the default bulma gave which was none
  event.preventDefault();
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
    </p>
  </div>

  <div class="field">
    <p>
      <strong>Password</strong>
    </p>

    <p class="control has-icons-left has-icons-right">
      <input
        class="input"
        :type="eyeIsToggle ? 'test' : 'password'"
        placeholder="Type your password"
        v-model="password"
      />
      <span class="icon is-small is-left"> <i class="fas fa-lock"></i> </span>
      <span
        class="icon is-small is-right"
        style="cursor: pointer"
        @click.prevent="toggleEye"
        @mousedown="preventEyeBall"
        aria-hidden="true"
      >
        <i v-if="eyeIsToggle" class="fa-solid fa-eye-slash eye"></i>
        <i v-else class="fa-solid fa-eye"></i>
      </span>
    </p>
  </div>

  <div class="field">
    <RouterLink to="/">Forgot password?</RouterLink>
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

.control.has-icons-left .icon,
.control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.5em;
  pointer-events: all;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 4;
}
</style>
