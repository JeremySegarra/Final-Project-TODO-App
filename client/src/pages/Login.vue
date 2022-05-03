<template>
  <div class="columns is-mobile">
    <div class="column is-four-fifths is-offset-1">
      <Title>Login</Title>
      <p>
        <strong>Note To Professor:</strong> to easily log in without creating an
        account use donald. <strong>Username:</strong> donald,
        <strong>Password:</strong> Qq1!1111
      </p>
      <Card>
        <LoginForm></LoginForm>
        <LoginBrands></LoginBrands>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "../components/login/LoginForm.vue";
import LoginBrands from "../components/login/LoginBrands.vue";
import Title from "../components/UI/Title.vue";
</script>

<style scoped>
.columns:last-child {
  margin-bottom: 0;
}
.columns {
  margin-top: 0;
}
</style>
