<script setup lang="ts">
import { userStore } from "../../models/store/user";
import { ref } from "vue";
import router from "../../router";

const store = userStore();

const props = defineProps(["message", "list", "index"]);

const completed = ref(false);

function removeMessage() {
  store.deleteMessage(props.index, props.list, props.message);
}

function replyMessage() {
  console.log("Im in reply message");

  router.push("/friendslist");
}
</script>

<template>
  <article class="message" :class="completed ? 'is-primary' : 'is-info'">
    <div class="message-header">
      <p>
        <strong>Sent By:</strong> {{ props.message.sender }} <br />
        <strong>Date:</strong> {{ props.message.date }}
      </p>
      <label
        @click="replyMessage"
        class="checkbox"
        v-if="props.list === 'recieved'"
      >
        <i class="fa-solid fa-reply"></i>

        Reply
      </label>
      <button
        class="delete"
        aria-label="delete"
        @click="removeMessage"
      ></button>
    </div>
    <div class="message-body">{{ props.message.message }}</div>
  </article>
</template>

<style scoped>
p strong {
  color: black;
}
</style>
