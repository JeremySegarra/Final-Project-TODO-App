<script setup lang="ts">
import { ref, computed } from "vue";
import UserCard from "../components/UserCard.vue";
import { useFriends } from "../models/store/friend-requests";

const useStore = useFriends();
useStore.fetchAll();

const currentTab = ref("friend-list");

function toggle(payload: string) {
  currentTab.value = payload;
}

const currentList = computed(() => {
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
          @click="toggle('friend-requests')"
          :class="{ 'is-active': currentTab === 'friend-requests' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-table-list" aria-hidden="true"></i
            ></span>
            <span>Friends Requests</span>
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
      v-for="user in currentList"
      :key="user"
      :list="user"
      :currentTab="currentTab"
    ></UserCard>
  </article>
</template>

<style scoped></style>
