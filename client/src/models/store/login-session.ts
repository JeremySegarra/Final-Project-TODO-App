import { defineStore } from "pinia";
import * as users from "../user";
import router from "../../router";
import { apiLogin } from "../myFetch";
import { useFriends } from "../../models/store/friend-requests";
import { userStore } from "./user";

export const LoginStore = defineStore("login", {
  state: () => ({
    isLoggedIn: false,
    list: users.list,
    session: { user: null as users.User | null },
  }),
  actions: {
    async Login(username: string, password: string) {
      try {
        const user = await apiLogin("users/login", {
          username,
          password,
        });
        this.session.user = user.data;
      } catch (err) {
        throw err;
      }
      this.isLoggedIn = true;
    },

    async Logout() {
      this.session.user = null;
      this.isLoggedIn = false;

      router.push("/");
    },
  },
});
