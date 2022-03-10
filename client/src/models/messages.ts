import { defineStore } from "pinia";

export const useMessages = defineStore("messages", {
  state: () => ({
    notifications: [
      {
        reciever: "",
        todoMessage: "",
        sender: "",
      },
    ],
  }),
});
