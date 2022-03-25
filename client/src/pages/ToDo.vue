<script setup lang="ts">
import { computed, ref } from "vue";
import { loggedInUser } from "../models/store/current-login-user";

import MyMessage from "../components/messages/MyMessages.vue";

//These three variables are getting the exact users personal messages/sent/recieved
const loggedInUserData = loggedInUser();
const myMessage = loggedInUserData?.myMessages;
const sentList = loggedInUserData?.sentMessages;
const recievedMessages = loggedInUserData?.recievedMessages;

//this is my default tab that should be active
const currentTab = ref("my-list");

const currentList = computed(() => {
  switch (currentTab.value) {
    case "my-list":
      return myMessage;

    case "recieved":
      return recievedMessages;

    case "sent":
      return sentList;
  }
});

//This is the toggle function for myMessages/Recieved/Sent
function toggle(payload: string) {
  currentTab.value = payload;
}
</script>

<template>
  <section>
    <div class="tabs is-toggle is-fullwidth is-small">
      <ul>
        <li
          @click="toggle('my-list')"
          :class="{ 'is-active': currentTab === 'my-list' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-table-list" aria-hidden="true"></i
            ></span>
            <span>My List</span>
          </a>
        </li>
        <li
          @click="toggle('recieved')"
          :class="{ 'is-active': currentTab === 'recieved' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-inbox" aria-hidden="true"></i
            ></span>
            <span>Recieved</span>
          </a>
        </li>
        <li
          @click="toggle('sent')"
          :class="{ 'is-active': currentTab === 'sent' }"
        >
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
          v-for="(message, index) in currentList"
          :key="message"
          :message="message"
          :list="currentTab"
        >
        </MyMessage>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
