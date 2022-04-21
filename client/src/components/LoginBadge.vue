<script setup lang="ts">
import { LoginStore } from "../models/store/login-session";
import { ref } from "vue";
const loginStore = LoginStore();
if (!loginStore.session.user) {
  throw "User not Found";
}
const username = ref(loginStore.session.user.username);
const userPic = ref(loginStore.session.user.pic);
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
          <strong>Hello {{ username }}</strong>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
img {
}
</style>
