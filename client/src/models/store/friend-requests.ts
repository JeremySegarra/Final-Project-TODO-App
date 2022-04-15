import { defineStore } from "pinia";
import { api } from "../myFetch";

export const useFriends = defineStore("friends", {
  state: () => ({
    friendsList: [],
    allUsers: [],
    pendingRequests: [],
  }),
  actions: {
    async fetchAll() {
      this.allUsers = (await api("users")).data;
      console.log("This is fetch all", this.allUsers);
    },
  },
});
