<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="section">
    <p><strong>Sign Up Using</strong></p>
    <button class="button google-brand brand">
      <i class="fa-brands fa-google"></i>
    </button>
    <button class="button twitter-brand brand">
      <i class="fa-brands fa-twitter"></i>
    </button>
    <button class="button facebook-brand brand">
      <i class="fa-brands fa-facebook"></i>
    </button>
  </div>

  <!-- This needs to become a router/link -->
  <div class="field">
    <div class="section">
      <p><strong>Or Sign Up Using</strong></p>
      <RouterLink to="/signup" class="button signup-brand is-rounded is-info"
        >Sign Up</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.section {
  text-align: center;
  padding: 1rem 1rem;
}
.brand {
  border-radius: 50%;
  color: white;
  margin: 0.5rem;
}
.google-brand {
  background-color: #db4437;
}
.twitter-brand {
  background-color: #1da1f2;
}
.facebook-brand {
  background-color: #4267b2;
}
</style>
