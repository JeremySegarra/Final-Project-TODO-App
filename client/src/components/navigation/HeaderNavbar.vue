<script setup lang="ts">
import NavbarLinks from "./NavbarLinks.vue";
import NavbarBurger from "./NavbarBurger.vue";
import LoginBadge from "../LoginBadge.vue";
import { ref, reactive, onMounted } from "vue";

const isClicked = ref(false);
const display = ref("");
const isLoggedIn = ref(false);

function showLinks() {
  isClicked.value = !isClicked.value;

  if (isClicked.value) {
    display.value = "is-active";
  } else {
    display.value = "none";
  }
}
</script>

<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="/assets/wellness-logo.png"
          alt="image of happy person"
          style="max-height: 80px"
          width="100"
        />
      </a>

      <NavbarBurger @click="showLinks"></NavbarBurger>
    </div>

    <NavbarLinks :clicked="isClicked" :display="display"></NavbarLinks>
  </nav>
</template>

<style scoped>
.navbar.is-light {
  background-color: #aed6f1;
}

img {
  border-radius: 50%;
}
</style>
