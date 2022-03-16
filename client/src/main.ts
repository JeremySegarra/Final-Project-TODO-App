import { createApp } from "vue";
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/styles/main.scss";
import "animate.css";
import { createPinia } from "pinia";

import Footer from "./components/UI/Footer.vue";
import HeaderNavbar from "./components/navigation/HeaderNavbar.vue";
import Card from "./components/UI/Card.vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("Footer", Footer);
app.component("HeaderNavbar", HeaderNavbar);
app.component("Card", Card);
app.use(router);
app.use(createPinia());

app.mount("#app");
