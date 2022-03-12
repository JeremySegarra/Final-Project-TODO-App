import { defineStore } from "pinia";

export const MessagesStore = defineStore("messages", {
  state: (): { notifications: Array<any> } => ({
    notifications: [],
  }),
  actions: {
    addMessage(sub: string, text: string) {
      console.log(sub);
      console.log(text);

      this.notifications.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: "who we are sending it too",
        sender: "who is currently logged in",
      });
      console.table(this.notifications);
    },
    deleteMessage(index: number) {
      this.notifications.splice(index, 1);
    },
  },
});
