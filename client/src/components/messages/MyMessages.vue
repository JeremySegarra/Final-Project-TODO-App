<script setup lang="ts">
import { userStore } from "../../models/store/user";
import { ref } from "vue";

const store = userStore();

const props = defineProps(["message", "list", "index"]);

const completed = ref(false);

function removeMessage() {
  store.deleteMessage(props.index, props.list, props.message);
}

function setCompleted() {
  completed.value = !completed.value;
}
</script>

<template>
  <article class="message" :class="completed ? 'is-primary' : 'is-info'">
    <div class="message-header">
      <p>
        <strong>Title:</strong> {{ props.message.subject }} <br />
        <strong>Created By:</strong> {{ props.message.sender }} <br />
        <strong>Date:</strong> {{ props.message.date }}
      </p>
      <label class="checkbox">
        <input type="checkbox" @click="setCompleted" />
        Completed
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
