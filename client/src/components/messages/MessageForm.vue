<script setup lang="ts">
import { ref, reactive, onServerPrefetch, onMounted, onBeforeMount } from "vue";
// import { list } from "../../models/user";
import { userStore } from "../../models/store/user";

//need to updated the list to be a friends list for current users
const subject = ref("");
const message = ref("");
const usernameToSend = ref("");
// const list: any = reactive([]);

const store = userStore();

//this gets me the list of users in the database and adds it to list
// onBeforeMount(async () => {
//   const users = await fetch("/api/users/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const usersList = await users.json();

//   JSON.parse(JSON.stringify(usersList)).forEach((user: any) => {
//     list.push(user);
//   });
// });

function createMessage(subject: string, message: string) {
  store.addMessage(subject, message);
  reset();
}
function send(subject: string, message: string) {
  store.sendMessage(subject, message, usernameToSend.value);
  reset();
}

// async function sendFriendRequest() {
//   const user = list.find((user: any) => user.username === usernameToSend.value);
//   user.pendingRequests.push(usernameToSend.value);
//   const requestUpdate = {
//     pendingRequests: user.pendingRequests,
//   };
//   // console.log(JSON.stringify(requestUpdate));

//   const response = await fetch(`/api/users/${user._id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestUpdate),
//   });
// }

function reset() {
  subject.value = "";
  message.value = "";
}
</script>

<template>
  <div class="section">
    <p><strong>Create a personal message or send to a friend</strong></p>
    <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">Subject</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter subject"
              v-model="subject"
            />
          </div>
          <!-- <p class="help is-danger">This field is required</p> -->
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">Question</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Enter message"
              v-model="message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button
              class="button is-primary"
              @click="createMessage(subject, message)"
            >
              Create Message
            </button>
            <button class="button is-primary" @click="send(subject, message)">
              Send Message To
            </button>
            <!-- <button class="button is-primary" @click="sendFriendRequest">
              Send Friend Request
            </button> -->
            <!-- <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Current Users Dropdown</label>(will be
                friends list in future)
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="usernameToSend">
                        <option
                          v-for="(user, index) in list"
                          :key="user.username"
                        >
                          {{ user.username }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
