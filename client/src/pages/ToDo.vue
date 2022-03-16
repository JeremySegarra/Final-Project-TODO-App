<script setup lang="ts">
import { ref } from "vue";
import { loggedInUser } from "../models/store/current-login-user";

import MyMessage from "../components/messages/MyMessages.vue";
import RecievedMessages from "../components/messages/RecievedMessages.vue";
import SentMessages from "../components/messages/SentMessages.vue";

//These three variables are getting the exact users personal messages/sent/recieved
const loggedInUserData = loggedInUser();
const myMessage = loggedInUserData?.myMessages;
const sentList = loggedInUserData?.sentMessages;
const recievedMessages = loggedInUserData?.recievedMessages;

//These variables Handle the toggleable buttons to view specific lists of messages
const activeList = ref("");
const activeRecieved = ref("");
const activeSent = ref("");
const isList = ref(false);
const isRecieved = ref(false);
const isSent = ref(false);

//This is the toggle function for myMessages/Recieved/Sent
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
  <section>
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
          :key="message"
          :message="message.message"
          :subject="message.subject"
          :reciever="message.reciever"
          :sender="message.sender"
          :date="message.date"
          :index="index"
        ></MyMessage>
        <RecievedMessages
          v-if="isRecieved"
          v-for="(message, index) in recievedMessages"
          :key="message"
          :message="message.message"
          :subject="message.subject"
          :reciever="message.reciever"
          :sender="message.sender"
          :date="message.date"
          :index="index"
        ></RecievedMessages>
        <SentMessages
          v-if="isSent"
          v-for="(message, index) in sentList"
          :key="message"
          :message="message.message"
          :subject="message.subject"
          :reciever="message.reciever"
          :sender="message.sender"
          :date="message.date"
          :index="index"
        ></SentMessages>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
