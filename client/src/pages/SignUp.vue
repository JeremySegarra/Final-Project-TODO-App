<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <Title>Sign Up</Title>
      <Card>
        <SignupForm></SignupForm>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import SignupForm from "../components/signup/SignupForm.vue";
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
