<script setup lang="ts">
import { ref } from "vue";
import { userStore } from "../../models/store/user";
import MyToDo from "./MyToDo.vue";

//need to updated the list to be a friends list for current users
const subject = ref("");
const message = ref("");
const store = userStore();
const sessionUser = store.sessionStore.session.user;
if (!sessionUser) {
  throw new Error("No user found in session");
}

const myMessage = sessionUser.myMessages;

function createToDo() {
  store.addToDo(message.value);
  reset();
}
function deleteMessage(index: number) {
  store.deleteToDo(index);
}

function reset() {
  subject.value = "";
  message.value = "";
}
</script>

<template>
  <div class="section">
    <article class="panel is-info">
      <p class="panel-heading">Reminders</p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input
            class="input is-info"
            type="text"
            placeholder="New ToDo"
            v-model="message"
            @keydown.enter="createToDo"
          />
          <span class="icon is-left">
            <i class="fa-solid fa-clipboard-check"></i>
          </span>
        </p>
      </div>
      <MyToDo
        v-for="(todo, index) in myMessage"
        :key="index"
        :todo="todo.message"
        @delete="deleteMessage(index)"
      ></MyToDo>
    </article>
  </div>
</template>

<style scoped></style>
