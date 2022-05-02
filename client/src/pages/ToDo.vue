<script setup lang="ts">
import { computed, ref } from "vue";
import { LoginStore } from "../models/store/login-session";
import MyMessage from "../components/messages/MyMessages.vue";

const loginStore = LoginStore();
const user = loginStore.session.user;

if (!user) {
  throw new Error("No user found");
}

const sentList = user.sentMessages;
const recievedMessages = user.recievedMessages;

//this is my default tab that should be active
const currentTab = ref("recieved");

const currentList = computed(() => {
  switch (currentTab.value) {
    case "recieved":
      return recievedMessages;

    case "sent":
      return sentList;
  }
});

//This is the toggle function for /Recieved/Sent
function toggle(payload: string) {
  currentTab.value = payload;
}
</script>

<template>
  <section>
    <div class="tabs is-toggle is-fullwidth is-small">
      <ul>
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
          :index="index"
          :message="message"
          :list="currentTab"
        >
        </MyMessage>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
