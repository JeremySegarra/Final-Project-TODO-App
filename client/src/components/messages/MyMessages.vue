<script setup lang="ts">
import { userCounter } from "../../models/store/user";
import { ref } from "vue";

const store = userCounter();
const props = defineProps([
  "message",
  "subject",
  "index",
  "date",
  "reciever",
  "sender",
]);

const completed = ref(false);

function removeMessage(index: number) {
  store.deleteMessage(index);
}

function setCompleted() {
  completed.value = !completed.value;
}
</script>

<template>
  <article class="message" :class="completed ? 'is-primary' : 'is-info'">
    <div class="message-header">
      <p>
        <strong>Title:</strong> {{ props.subject }} <br />
        <strong>Created By:</strong> {{ props.sender }} <br />
        <strong>Date:</strong> {{ props.date }}
      </p>
      <label class="checkbox">
        <input type="checkbox" @click="setCompleted" />
        Completed
      </label>
      <button
        class="delete"
        aria-label="delete"
        @click="removeMessage(props.index)"
      ></button>
    </div>
    <div class="message-body">{{ props.message }}</div>
  </article>
</template>

<style scoped>
p strong {
  color: black;
}
</style>
