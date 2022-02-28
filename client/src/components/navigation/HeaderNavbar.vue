<template>
  <nav class="navbar is-light has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="Wellness-Logo.png"
          alt=""
          style="max-height: 80px"
          width="100"
        />
      </a>
      <NavbarBurger @click="showLinks"></NavbarBurger>
    </div>

    <NavbarLinks :clicked="isClicked" :display="display"></NavbarLinks>
  </nav>
</template>

<script lang="ts">
import NavbarLinks from "./NavbarLinks.vue";
import NavbarBurger from "./NavbarBurger.vue";

export default {
  components: {
    NavbarLinks,
    NavbarBurger,
  },

  data() {
    return {
      isClicked: false,
      display: "",
      isLoggedIn: false,
    };
  },

  methods: {
    showLinks() {
      this.isClicked = !this.isClicked;

      if (this.isClicked) {
        this.display = "is-active";
      } else {
        this.display = "none";
      }
    },
  },
};
</script>

<style scoped>
.navbar.is-light {
  background-color: #aed6f1;
}
</style>
