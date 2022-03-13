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

<script setup lang="ts">
import { MessagesStore } from "../../models/messages";
import * as loggedUser from "../../store/login-session";
const messageStore = MessagesStore();

function removeMessage(index: number) {
  // console.log("I am in removeMessage here is the username: ", currentUser);

  messageStore.deleteMessage(index);
}

const props = defineProps(["message", "subject", "index"]);
</script>

<style scoped></style>
