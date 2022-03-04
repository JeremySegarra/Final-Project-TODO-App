<template>
  <LoginColumnLayout>
    <Title></Title>
    <Card>
      <LoginForm></LoginForm>
      <LoginBrands></LoginBrands>
    </Card>
  </LoginColumnLayout>
</template>

<script setup lang="ts">
import LoginForm from "../components/navigation/login/LoginForm.vue";
import LoginBrands from "../components/navigation/login/LoginBrands.vue";
import Title from "../components/UI/Title.vue";
import LoginColumnLayout from "../components/layout/LoginColumnLayout.vue";
</script>

<style scoped></style>
