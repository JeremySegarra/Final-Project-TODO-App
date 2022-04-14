<script setup lang="ts">
import { ref, computed, reactive, onBeforeMount } from "vue";
import Card from "../components/UI/Card.vue";
import UserCard from "../components/UserCard.vue";

const currentTab = ref("friend-list");
const activeUserList: any = reactive([]);
const friendList: any = reactive([]);

onBeforeMount(async () => {
  //this first get request is getting all the users in the database
  const users = await fetch("/api/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const usersList = await users.json();

  JSON.parse(JSON.stringify(usersList)).forEach((user: any) => {
    activeUserList.push(user);
  });
  //This friends list needs to be fetching the currently logged in users friends list
  //Need the login function to work first but api is working
  const friends = await fetch(
    "/api/messages/friends/62559fbd18b049fb5e8ead1f",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const list = await friends.json();

  const parsedList = JSON.parse(JSON.stringify(list));
  console.log(parsedList.friendsList);
  friendList.push(parsedList.friendsList);
});

function toggle(payload: string) {
  currentTab.value = payload;
}

// const currentList = computed(() => {
//   switch (currentTab.value) {
//     case "friend-list":
//       return ;

//     case "active-users":
//       return ;
//   }
// });
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
    <UserCard></UserCard>
  </article>
</template>

<style scoped></style>
