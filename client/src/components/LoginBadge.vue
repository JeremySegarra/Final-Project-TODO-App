<script setup lang="ts">
import { LoginStore } from "../models/store/login-session";
import { ref, watch } from "vue";
import router from "../router";
import { computed } from "@vue/reactivity";
const loginStore = LoginStore();
const user = loginStore.session.user;
if (!user) {
  throw "User not Found";
}

const username = ref(user.username);
const userPic = ref(user.pic);

function editUser() {
  router.push("/edit-user");
}
</script>

<template>
  <article class="media">
    <figure class="media-left" @click="editUser">
      <a class="image is-220x220">
        <img :src="userPic" />
      </a>
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
.navbar-item img:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}
</style>
