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
const searchField = ref("");

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

//This is the function to search my friends list
function selectFriends() {
  console.log("Im inside select friends");

  useStore.filteredDataArray(searchField.value);
}
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
            <span class="icon"><i class="fa-solid fa-user-group"></i></span>
            <span>Friends</span>
          </a>
        </li>
        <li
          @click="toggle('pending-requests')"
          :class="{ 'is-active': currentTab === 'pending-requests' }"
        >
          <a>
            <span class="icon"><i class="fa-solid fa-people-pulling"></i></span>
            <span>Pending Requests</span>
          </a>
        </li>
        <li
          @click="toggle('active-users')"
          :class="{ 'is-active': currentTab === 'active-users' }"
        >
          <a>
            <span class="icon"
              ><i class="fa-solid fa-people-group" aria-hidden="true"></i
            ></span>
            <span>Active Users</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="container">
      <section>
        <o-field label="Find a Friend">
          <o-autocomplete
            rounded
            expanded
            placeholder="Friends Name"
            icon="search"
            v-model="searchField"
            clearable
            @keyup="selectFriends"
          >
            <template slot="empty">No results found</template>
          </o-autocomplete>
        </o-field>
      </section>
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
