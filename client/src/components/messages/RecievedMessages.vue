<script setup lang="ts">
import { MessagesStore } from "../../models/messages";

const messageStore = MessagesStore();

function removeMessage(index: number) {
  // messageStore.deleteMessage(index);
}

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
