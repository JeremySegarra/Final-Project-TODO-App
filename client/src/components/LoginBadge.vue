<script setup lang="ts">
import { LoginStore } from "../models/store/login-session";
import { ref } from "vue";
const loginStore = LoginStore();
const user = loginStore.session.user;
if (!user) {
  throw "User not Found";
}

const username = ref(user.username);
const userPic = ref(user.pic);
// console.log(username.value);
</script>

<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-220x220">
        <img :src="userPic" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Welcome Back <br />{{ username }}!</strong>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.navbar-item img {
  max-height: 3rem;
  border-radius: 50%;
}
</style>
