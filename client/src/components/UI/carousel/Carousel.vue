<script setup lang="ts">
const emits = defineEmits(["next", "prev"]);
function next() {
  console.log("Im emitting in next");
  emits("next");
}

function prev() {
  console.log("Im emitting in prev");
  emits("prev");
}
</script>

<template>
  <div class="carousel">
    <slot></slot>

    <button @click="next" class="button next">Next</button>
    <button @click="prev" class="button previous">Prev</button>
  </div>
</template>

<style scoped>
.carousel {
  position: absolute;
  /* width: 600px; */
  width: 50%;
  /* height: 350px; */
  height: 50%;
  overflow: hidden;
}
button {
  position: absolute;
  /* height: 40px; */
  height: 2rem;
  /* width: 50px; */
  width: 3rem;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
}
button:focus,
button:hover {
  outline: none;
}

.next {
  right: 0;
}
.previous {
  left: 0;
}
</style>
