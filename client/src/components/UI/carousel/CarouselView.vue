<script setup lang="ts">
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";
import { ref, reactive, onMounted } from "vue";

const slides = reactive([
  "/assets/kelly-sikkema-6aY-6B3MiZ4-unsplash.jpg",
  "/assets/thomas-bormans-pcpsVsyFp_s-unsplash.jpg",
]);
const isVisible = ref(0);
const direction = ref("left");

function next() {
  console.log("I am inside the view next function");

  if (isVisible.value >= slides.length - 1) {
    isVisible.value = 0;
  } else {
    isVisible.value++;
  }
  direction.value = "left";
}
function prev() {
  console.log("I am inside the view previous function");
  if (isVisible.value <= 0) {
    isVisible.value = slides.length - 1;
  } else {
    isVisible.value--;
  }
  direction.value = "right";
}
</script>

<template>
  <Carousel @next="next" @prev="prev">
    <CarouselSlide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :isVisible="isVisible"
      :direction="direction"
    >
      <img :src="slide"
    /></CarouselSlide>
  </Carousel>
</template>

<style scoped></style>
