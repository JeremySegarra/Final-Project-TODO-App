<script setup lang="ts">
import Slider from "../components/UI/carousel/Slider.vue";
import MessageForm from "../components/messages/MessageForm.vue";
</script>

<template>
  <div class="container">
    <Slider></Slider>
    <MessageForm></MessageForm>
  </div>
</template>

<style scoped>
.container {
  max-height: 40%;
  height: calc(100vh - 96px);
  width: 100%;
}

.section {
  background-color: aliceblue;
}
p {
  text-align: center;
}
</style>
