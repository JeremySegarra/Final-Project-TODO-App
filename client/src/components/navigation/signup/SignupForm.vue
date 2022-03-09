<template>
  <div class="field">
    <label class="label">First Name</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="first name" />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Last Name</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="last name" />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Enter a username" />
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
      <input class="input" type="email" placeholder="Enter your email" />
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
      <input class="input" type="password" placeholder="Password" />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <label class="label">Verify Password</label>
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password" />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>

  <div class="field is-grouped-centered is-horizontal">
    <p class="control">
      <RouterLink class="button is-primary" to="/"> Submit </RouterLink>
    </p>
    <p class="control">
      <RouterLink class="button is-light" to="/"> Cancel </RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
// For Username class conditionally add is-success class for when the username is available also conditionally render commented segments
// For Email do the same except class is is-danger
import { RouterLink } from "vue-router";
</script>

<style scoped>
.button {
  margin: 0.25em;
}
</style>
