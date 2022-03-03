<template>
  <div class="field">
    <p><strong>Username</strong></p>
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Type you username" />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p><strong>Password</strong></p>
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Type your password" />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-info is-fullwidth is-rounded">Login</button>
    </p>
  </div>

  <p>Sign up</p>
</template>

<script setup lang="ts"></script>

<style scoped>
.content p:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
