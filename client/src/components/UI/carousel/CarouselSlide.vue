<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["isVisible", "index", "direction"]);
</script>

<template>
  <transition :name="direction" mode="in-out">
    <div v-show="props.isVisible === props.index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.left-enter-active {
  animation: leftInAnimation 0.5s ease-in-out;
}
.left-leave-active {
  animation: leftOutAnimation 0.5s ease-in-out;
}
@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.right-enter-active {
  animation: rightInAnimation 0.5s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.5s ease-in-out;
}
@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>

//mode="out-in" enter-active-class="animate__animated animate__fadeInLeft"
leave-active-class="animate__animated animate__fadeOutLeft"
