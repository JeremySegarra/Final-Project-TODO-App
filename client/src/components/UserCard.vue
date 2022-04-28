<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useFriends } from "../models/store/friend-requests";
import { userStore } from "../models/store/user";

const useFriendStore = useFriends();
const useStore = userStore();

//also need to get the props from the parent component meaning both lists
const props = defineProps(["list", "index", "currentTab"]);
const message = ref("");

function addFriendRequest(index: number) {
  //This function is going to remove the user from the logged in users Request list and add them to their Friends List in the Database
  //we need to send the data and update the database
  useFriendStore.friendRequest(index);
}

function addFriend(index: number) {
  useFriendStore.addFriend(index);

  //maybe call remove request here? or in pinia
}

function removeRequest(index: number) {
  useFriendStore.removePendingRequest(index, props.currentTab);
}

function sendMessage(index: number) {
  //send message to friend
  useStore.sendMessage(index, message.value);
  message.value = "";
}
</script>

<template>
  <div class="control">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-120x120">
            <img :src="list.pic" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-right">
          <!-- This will be the username field -->
          <p class="title is-4">{{ props.list.username }}</p>
          <hr />
          <!-- This is the email field -->
          <p class="subtitle is-6">{{ props.list.email }}</p>
        </div>
      </div>
      <div class="field" v-if="props.currentTab === 'friend-list'">
        <div class="field-label is-normal"></div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                class="input is-rounded"
                type="email"
                placeholder="Send Message"
                v-model="message"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="addFriendRequest(props.index)"
        v-if="props.currentTab === 'active-users'"
      >
        Send Friend Request
      </button>
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="sendMessage(props.index)"
        v-if="props.currentTab === 'friend-list'"
      >
        Send Message
      </button>
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="addFriend(props.index)"
        v-if="props.currentTab === 'pending-requests'"
      >
        Add
      </button>
      <button
        href="#"
        class="card-footer-item button is-danger"
        @click="removeRequest(props.index)"
        v-if="
          props.currentTab === 'friend-list' ||
          props.currentTab === 'pending-requests'
        "
      >
        Remove
      </button>
    </footer>
  </div>
</template>

<style scoped>
.card-content,
footer {
  background-color: #aed6f1;
}
.control {
  margin-bottom: 1em;
}

a {
  color: black;
}
</style>
