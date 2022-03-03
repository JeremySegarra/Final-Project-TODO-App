<template>
  <ColumnLayout>
    <Title></Title>
    <Card>
      <Login></Login>
    </Card>
  </ColumnLayout>
  <!-- <HeaderNavbar></HeaderNavbar>
  <ColumnLayout>
    <Card>
      <h1>Praying for Ukrain</h1>
    </Card>
  </ColumnLayout>
  <Footer></Footer> -->
</template>

<script setup lang="ts">
import ColumnLayout from "./components/layout/ColumnLayout.vue";
import Login from "./pages/Login.vue";
import Title from "./components/UI/Title.vue";
</script>

<style>
html {
  /* background-color: #aed6f1; */
  background-image: url("/assets/pawel-czerwinski-SoB70WFVWGU-unsplash.jpg");
  background-size: cover;
  /* background-repeat: no-repeat; */
}
</style>
