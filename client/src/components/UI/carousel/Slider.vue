<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive } from "vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../assets/styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const images = reactive([
  "/assets/thomas-bormans-pcpsVsyFp_s-unsplash.jpg",
  "/assets/kelly-sikkema-6aY-6B3MiZ4-unsplash.jpg",
  "/assets/brett-jordan-MwkDKpOQmGc-unsplash.jpg",
  "/assets/fabian-blank-pElSkGRA2NU-unsplash.jpg",
  "/assets/krakenimages-376KN_ISplE-unsplash.jpg",
  "/assets/kelly-sikkema-6aY-6B3MiZ4-unsplash.jpg",
  "/assets/towfiqu-barbhuiya-0ITvgXAU5Oo-unsplash.jpg",
  "/assets/towfiqu-barbhuiya-jpqyfK7GB4w-unsplash.jpg",
]);

const modules = reactive([Autoplay, Pagination, Navigation]);
</script>

<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="slide in images" :key="slide"
      ><img :src="slide"
    /></swiper-slide>
  </swiper>
</template>
