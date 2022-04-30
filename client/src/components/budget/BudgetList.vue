<script setup lang="ts">
const props = defineProps(["desc", "item", "index"]);
</script>

<template>
  <article class="message is-primary">
    <div class="message-header">
      <p>
        <strong>Purchased Item: {{ props.index }}</strong>
      </p>

      <button
        class="delete"
        aria-label="delete"
        @click="$emit('delete')"
      ></button>
    </div>
    <div class="message-body">
      You spent ${{ +props.item }} on {{ props.desc }}
    </div>
  </article>
</template>

<style scoped></style>
