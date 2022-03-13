<script setup lang="ts">
import { ref } from "vue";

import MyMessage from "../components/messages/MyMessages.vue";
import { MessagesStore } from "../models/messages";
import RecievedMessages from "../components/messages/RecievedMessages.vue";
import SentMessages from "../components/messages/SentMessages.vue";
import { list } from "../models/user";
import { LoginStore } from "../store/login-session";
//might have to pass state up to this component for is active class on tabs in order to use v-if on what to see
const messageStore = MessagesStore();
const loginStore = LoginStore();

//This is getting me the exact users recieved messages
const usersList = list;
const currentUser = loginStore.$state.session.user?.username;
const user = usersList.find((u) => u.username === currentUser);
const recievedMessages = user?.recievedMessages;
console.log("I am recievedMessages: ");
console.table(recievedMessages);

//This is getting me the global my messages i need the exact user
const myMessage = user?.myMessages;
console.log("This is my Message below");
console.table(myMessage);

//This is accessing the global my list not what i want
// const myList = messageStore.$state.myMessages;
// console.log("This is my List");
// console.table(myList);

//This is accessing the users sent messages list
const sentList = user?.sentMessages;
// const sentList = messageStore.$state.sentMessages;

const activeList = ref("");
const activeRecieved = ref("");
const activeSent = ref("");

const isList = ref(false);
const isRecieved = ref(false);
const isSent = ref(false);

function toggle(payload: string) {
  if (payload === "my-list") {
    isList.value = !isList.value;
    isRecieved.value = false;
    isSent.value = false;

    if (isList.value) {
      activeList.value = "is-active";
      activeRecieved.value = "";
      activeSent.value = "";
    } else {
      activeList.value = "";
    }
  }

  if (payload === "recieved") {
    isRecieved.value = !isRecieved.value;
    isList.value = false;
    isSent.value = false;
    if (isRecieved.value) {
      activeRecieved.value = "is-active";
      activeList.value = "";
      activeSent.value = "";
    } else {
      activeRecieved.value = "";
    }
  }

  if (payload === "sent") {
    isSent.value = !isSent.value;
    isList.value = false;
    isRecieved.value = false;
    if (isSent.value) {
      activeSent.value = "is-active";
      activeList.value = "";
      activeRecieved.value = "";
    } else {
      activeSent.value = "";
    }
  }
}
</script>

<template>
  <div class="tabs is-toggle is-fullwidth is-small">
    <ul>
      <li @click="toggle('my-list')" :class="activeList">
        <a>
          <span class="icon"
            ><i class="fa-solid fa-table-list" aria-hidden="true"></i
          ></span>
          <span>My List</span>
        </a>
      </li>
      <li @click="toggle('recieved')" :class="activeRecieved">
        <a>
          <span class="icon"
            ><i class="fa-solid fa-inbox" aria-hidden="true"></i
          ></span>
          <span>Recieved</span>
        </a>
      </li>
      <li @click="toggle('sent')" :class="activeSent">
        <a>
          <span class="icon"
            ><i class="fa-solid fa-share" aria-hidden="true"></i
          ></span>
          <span>Sent</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="columns is-mobile">
    <div class="column is-four-fifths is-offset-1">
      <MyMessage
        v-if="isList"
        v-for="(message, index) in myMessage"
        :key="message.username"
        :message="message.message"
        :subject="message.subject"
        :index="index"
      ></MyMessage>
      <RecievedMessages
        v-if="isRecieved"
        v-for="(message, index) in recievedMessages"
        :key="message.message"
        :message="message.message"
        :subject="message.subject"
        :index="index"
      ></RecievedMessages>
      <SentMessages
        v-if="isSent"
        v-for="(message, index) in sentList"
        :key="message.message"
        :message="message"
        :index="index"
      ></SentMessages>
    </div>
  </div>
</template>

<style scoped></style>
