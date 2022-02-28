<template>
  <HeaderNavbar></HeaderNavbar>
  <ColumnLayout>
    <Card>
      <h1>Praying for Ukrain</h1>
    </Card>
  </ColumnLayout>
  <Footer></Footer>
</template>

<script lang="ts">
import Card from "./components/UI/Card.vue";
import HeaderNavbar from "./components/navigation/HeaderNavbar.vue";
import ColumnLayout from "./components/layout/ColumnLayout.vue";
import Footer from "./components/UI/Footer.vue";

export default {
  components: {
    Card,
    HeaderNavbar,
    ColumnLayout,
    Footer,
  },
};
</script>

<style></style>
