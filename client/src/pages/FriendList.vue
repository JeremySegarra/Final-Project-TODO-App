<script setup lang="ts">
import { ref, computed, watch } from "vue";
import UserCard from "../components/UserCard.vue";
import { useFriends } from "../models/store/friend-requests";

const useStore = useFriends();
//Here we fetch the data from the store and update the state, still need to figure out how to get latest data
useStore.fetchAll();
useStore.fetchFriends();
useStore.fetchPendingRequests();

const currentTab = ref("friend-list");

function toggle(payload: string) {
  currentTab.value = payload;
}

watch(currentTab, () => {
  switch (currentTab.value) {
    case "friend-list":
      useStore.fetchFriends();
      break;
    case "pending-requests":
      useStore.fetchPendingRequests();
      break;
    case "active-users":
      useStore.fetchAll();
      break;
  }
});

const currentList = computed(() => {
  console.log("Im in the switch statement");

  switch (currentTab.value) {
    case "friend-list":
      return useStore.friendsList;
    case "pending-requests":
      return useStore.pendingRequests;
    case "active-users":
      return useStore.allUsers;
  }
});
</script>

<template>
  <article>
    <div class="tabs is-toggle is-fullwidth is-small">
      <ul>
        <li
          @click="toggle('friend-list')"
          :class="{ 'is-active': currentTab === 'friend-list' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-table-list" aria-hidden="true"></i
            ></span>
            <span>Friends</span>
          </a>
        </li>
        <li
          @click="toggle('pending-requests')"
          :class="{ 'is-active': currentTab === 'pending-requests' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-table-list" aria-hidden="true"></i
            ></span>
            <span>Pending Requests</span>
          </a>
        </li>
        <li
          @click="toggle('active-users')"
          :class="{ 'is-active': currentTab === 'active-users' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-inbox" aria-hidden="true"></i
            ></span>
            <span>Active Users</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- use v-for to loop through the currently selected list from our computed property above just like with our messages -->
    <UserCard
      v-for="(user, index) in currentList"
      :key="user"
      :list="user"
      :index="index"
      :currentTab="currentTab"
    ></UserCard>
  </article>
</template>

<style scoped></style>
