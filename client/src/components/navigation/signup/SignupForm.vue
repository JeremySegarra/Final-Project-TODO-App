<script setup lang="ts">
// For Username class conditionally add is-success class for when the username is available also conditionally render commented segments
// For Email do the same except class is is-danger
import { RouterLink } from "vue-router";
import { userCounter } from "../../../store/user";

const counter = userCounter();
</script>
<template>
  <form @submit.prevent="">
    <div class="field">
      <label class="label">First Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="first name"
          v-model="counter.$state.list[counter.$state.counter].firstName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="last name"
          v-model="counter.$state.list[counter.$state.counter].lastName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="Enter a username"
          v-model="counter.$state.list[counter.$state.counter].username"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <!-- <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span> -->
      </div>
      <!-- <p class="help is-success">This username is available</p> -->
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="Enter your email"
          v-model="counter.$state.list[counter.$state.counter].email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <!-- <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span> -->
      </div>
      <!-- <p class="help is-danger">This email is invalid</p> -->
    </div>

    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          v-model="counter.$state.list[counter.$state.counter].password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Verify Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          v-model="counter.$state.list[counter.$state.counter].verifypass"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field is-grouped-centered is-horizontal">
      <p class="control">
        <RouterLink
          class="button is-primary"
          to="/"
          @click="counter.setNewUser(counter.$state.counter)"
        >
          Submit
        </RouterLink>
      </p>
      <p class="control">
        <RouterLink class="button is-light" to="/"> Cancel </RouterLink>
      </p>
    </div>
  </form>
</template>

<style scoped>
.button {
  margin: 0.25em;
}
</style>
