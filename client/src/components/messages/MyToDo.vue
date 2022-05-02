<script setup lang="ts">
const props = defineProps(["todo"]);

console.log("Im the prop todo", props.todo);
</script>

<template>
  <div @click="$emit('delete')">
    <a class="panel-block is-active">
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      {{ props.todo }}
    </a>
  </div>
</template>

<style scoped></style>
