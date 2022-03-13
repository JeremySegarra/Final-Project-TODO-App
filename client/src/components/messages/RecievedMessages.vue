<script setup lang="ts">
function removeMessage(index: number) {}

const props = defineProps(["message", "subject", "index"]);
</script>

<template>
  <article class="message is-info">
    <div class="message-header">
      <p>{{ props.subject }}</p>
      <button
        class="delete"
        aria-label="delete"
        @click="removeMessage(props.index)"
      ></button>
    </div>
    <div class="message-body">{{ props.message }}</div>
  </article>
</template>

<style scoped></style>
