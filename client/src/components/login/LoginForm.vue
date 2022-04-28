<script setup lang="ts">
import { LoginStore } from "../../models/store/login-session";
import { ref, reactive } from "vue";
import router from "../../router";
import { useFriends } from "../../models/store/friend-requests";

const loginStore = LoginStore();
const username = ref("");
const password = ref("");
const eyeIsToggle = ref(false);
const userNotFound = reactive({
  type: false,
  message: "",
});
const invalidPassword = reactive({
  type: false,
  message: "",
});

function login() {
  loginStore
    .Login(username.value, password.value)
    .then(() => {
      userNotFound.type = false;
      invalidPassword.type = false;
      const useStore = useFriends();

      useStore.fetchPendingRequests();

      router.push("/home");
    })
    .catch((error) => {
      if (error.message === "User not found please re-enter username") {
        userNotFound.type = true;
        invalidPassword.type = false;
        userNotFound.message = error.message;
      } else {
        userNotFound.type = false;
        invalidPassword.type = true;
        invalidPassword.message = error.message;
      }
    });

  // loginStore
  //   .Login(username.value, password.value)
  //   .then(() => {
  //     userNotFound.type = false;
  //     invalidPassword.type = false;
  //     const useStore = useFriends();

  //     useStore.fetchPendingRequests();

  //     router.push("/home");
  //   })
  //   .catch((err) => {
  //     console.log(
  //       "This is the error in the login form component ",
  //       err.errors[0]
  //     );

  //     if (err.errors[0] === "User not found please re-enter username") {
  //       userNotFound.type = true;
  //       invalidPassword.type = false;
  //       userNotFound.message = err.errors[0];
  //     } else {
  //       userNotFound.type = false;
  //       invalidPassword.type = true;
  //       invalidPassword.message = err.errors[0];
  //     }
  //   });
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
    <p style="color: red" v-if="userNotFound.type">
      {{ userNotFound.message }}
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
    <p style="color: red" v-if="invalidPassword.type">
      {{ invalidPassword.message }}
    </p>
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
