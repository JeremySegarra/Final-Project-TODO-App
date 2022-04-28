import { defineStore } from "pinia";
import * as users from "../user";
import router from "../../router";
import { apiLogin } from "../myFetch";
import { modulerApi } from "../myFetch";

export const LoginStore = defineStore("login", {
  state: () => ({
    isLoggedIn: false,
    session: { user: null as users.User | null },
  }),
  actions: {
    async Login(username: string, password: string) {
      const response = await this.api(
        "users/login",
        { username, password },
        "POST"
      );

      console.log("This is the response before we check if its ok", response);

      if (response.message) {
        console.log("Im not ok");
        const error = response;
        this.session.user = null;
        console.log("this is the error", error);
        throw error;
      }

      console.log(
        "This is right after the response is not ok and we swet loggin to true heres the data",
        response
      );

      this.session.user = response;
      this.isLoggedIn = true;

      // try {
      //   const user = await apiLogin("users/login", {
      //     username,
      //     password,
      //   });
      //   this.session.user = user.data;
      // } catch (err) {
      //   throw err;
      // }
      // this.isLoggedIn = true;
    },

    async Logout() {
      this.session.user = null;
      this.isLoggedIn = false;

      router.push("/");
    },

    async api(
      url: string,
      data?: any,
      method?: "GET" | "POST" | "PUT" | "DELETE",
      headers: any = {}
    ) {
      // console.log("This is the url", url);

      //if this user has a token
      if (this.session.user?.token) {
        headers.Authorization = `Bearer ${this.session.user.token}`;
      }

      try {
        const response = await modulerApi(url, data, method, headers);

        if (response.errors?.length) {
          console.log("Im throwing the errors down");

          throw { message: response.errors.join(", ") };
        }

        return await response.data;
      } catch (error: any) {
        console.log("Im catching those errors i threw here ", error);
        return error;
      }
    },
  },
});
