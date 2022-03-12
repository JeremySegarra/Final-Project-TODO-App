<script setup lang="ts">
import Message from "../components/messages/Message.vue";
import MessageTabs from "../components/messages/MessageTabs.vue";
import { MessagesStore } from "../models/messages";

const messageStore = MessagesStore();
const list = messageStore.$state.notifications;
</script>

<template>
  <MessageTabs></MessageTabs>
  <div class="columns is-mobile">
    <div class="column is-four-fifths is-offset-1">
      <Message
        v-for="(message, index) in list"
        :key="message.message"
        :message="message"
        :index="index"
      ></Message>
    </div>
  </div>
</template>

<style scoped></style>
