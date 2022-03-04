import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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

// router.beforeEach((to, from) => {
//   //list of paths that require login!
//   if (["/messages"].includes(to.path)) {
//     if (!session.user) {
//       return "/login";
//     }
//   }
// });

export default router;
