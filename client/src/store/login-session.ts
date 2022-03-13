import { defineStore } from "pinia";
import * as users from "../models/user";
import router from "../router";

export const LoginStore = defineStore("login", {
  state: () => ({
    isLoggedIn: false,
    list: users.list,
    session: { user: null as users.User | null },
  }),
  actions: {
    async Login(username: string, password: string) {
      if (username === "" || password === "") {
        throw { message: "Invalid username/password" };
      }
      this.isLoggedIn = true;
      const user = users.list.find((u) => u.username === username);

      if (!user) {
        throw { message: "User not found" };
      }
      if (user.password !== password) {
        throw { message: "Incorrect password" };
      }

      this.session.user = user;

      router.push("/home");
    },

    async Logout() {
      this.session.user = null;
      this.isLoggedIn = false;

      router.push("/");
    },
  },
});
