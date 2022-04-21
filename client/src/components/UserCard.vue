<script setup lang="ts">
import { defineProps } from "vue";
import { useFriends } from "../models/store/friend-requests";

const useStore = useFriends();
//also need to get the props from the parent component meaning both lists
const props = defineProps(["list", "index", "currentTab"]);
const isAll = props.currentTab === "active-users";
console.log("Im checking the list");

console.log(props.list);

function addFriendAll(index: number) {
  //This function is going to remove the user from the logged in users Request list and add them to their Friends List in the Database
  //we need to send the data and update the database
  useStore.friendRequest(index);
}

function addFriend(index: number) {
  useStore.addFriend(index);

  //maybe call remove request here? or in pinia
}

function removeRequest(index: number) {
  useStore.removePendingRequest(index, props.currentTab);
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
    </div>
    <footer class="card-footer">
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="addFriendAll(props.index)"
        v-if="props.currentTab === 'active-users'"
      >
        Send Friend Request
      </button>
      <button
        href="#"
        class="card-footer-item button is-info"
        @click="addFriendAll(props.index)"
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
