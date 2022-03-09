import { defineStore } from "pinia";

export const usersList = defineStore("users", {
  state: () => ({
    users: [{}],
  }),
});
