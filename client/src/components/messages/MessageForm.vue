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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MessagesStore } from "../../models/messages";
import { ref } from "vue";
const messageStore = MessagesStore();

const subject = ref("");
const message = ref("");

function createMessage(subject: string, message: string) {
  messageStore.addMessage(subject, message);
  reset();
}

function reset() {
  subject.value = "";
  message.value = "";
}
</script>

<style scoped></style>
