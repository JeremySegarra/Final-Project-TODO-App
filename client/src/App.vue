<script setup lang="ts">
import Footer from "./components/UI/Footer.vue";
</script>

<template>
  <HeaderNavbar></HeaderNavbar>
  <router-view v-slot="{ Component }">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- <Footer></Footer> -->
</template>

<style scoped></style>
