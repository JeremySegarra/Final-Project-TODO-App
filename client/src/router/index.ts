import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import session from "../models/session";
import { LoginStore } from "../models/store/login-session";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import ToDo from "../pages/ToDo.vue";
import Budget from "../pages/Budget.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  { path: "/signup", component: SignUp },
  { path: "/todo", component: ToDo },
  { path: "/budget", component: Budget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
});

router.beforeEach((to, from) => {
  //list of paths that require login!
  const protectedUrls = ["/home", "/todo", "/budget"];
  const loginSession = LoginStore();
  if (protectedUrls.includes(to.path)) {
    if (!loginSession.$state.session.user) {
      return "/";
    }
  }
});

export default router;
