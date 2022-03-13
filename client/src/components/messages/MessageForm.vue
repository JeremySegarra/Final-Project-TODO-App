<template>
  <div class="section">
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
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Friends List</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="username">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MessagesStore } from "../../models/messages";
import { ref } from "vue";
import { list } from "../../models/user";
import * as loggedUser from "../../store/login-session";

const messageStore = MessagesStore();

//need to updated the list to be a friends list for current users
const subject = ref("");
const message = ref("");
const username = ref("");

//Need to get the current user in order to create a personal message
//I am only reading the username from the options menu dropdown that is used for Send
const loginStore = loggedUser.LoginStore();
const currentUser = loginStore.session.user?.username;

function createMessage(subject: string, message: string) {
  // console.log("I am in createMessage the username im passing is:", currentUser);

  messageStore.addMessage(subject, message, currentUser);
  reset();
}

function send(subject: string, message: string) {
  // console.log("I am in Send: ", username.value);

  messageStore.sendMessage(subject, message, username.value);

  reset();
}

function reset() {
  subject.value = "";
  message.value = "";
}
</script>

<style scoped></style>
