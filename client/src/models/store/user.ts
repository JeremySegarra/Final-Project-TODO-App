import { defineStore } from "pinia";
import { list } from "../user";
import { currentDate } from "./current-date";
import { loggedInUser } from "./current-login-user";

export const userStore = defineStore("user", {
  state: () => ({
    list: list,
    date: currentDate(),
  }),

  actions: {
    randomNumberGenerator() {
      return Math.floor(Math.random() * 30) + 1;
    },
    async setNewUser(
      firstName: string,
      lastName: string,
      username: string,
      email: string,
      password: string
    ) {
      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
        pic: `https://randomuser.me/api/portraits/men/${this.randomNumberGenerator()}.jpg`,
        recievedMessages: [],
        myMessages: [],
        sentMessages: [],
        pendingRequests: [],
        friendsList: [],
      };

      const response = await fetch("http://localhost:3001/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        console.log("this is in the not ok");

        const error = await response.json();
        throw error;
      }
    },
    addMessage(sub: string, text: string) {
      const loggedInUserData = loggedInUser();

      loggedInUserData?.myMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: loggedInUserData.username,
        sender: loggedInUserData.username,
        date: this.date,
      });
    },
    deleteMessage(index: number, messageTab: String) {
      const loggedInUserData = loggedInUser();

      switch (messageTab) {
        case "my-list":
          loggedInUserData?.myMessages.splice(index, 1);
          break;
        case "recieved":
          loggedInUserData?.recievedMessages.splice(index, 1);
          break;
        case "sent":
          loggedInUserData?.sentMessages.splice(index, 1);
      }
    },

    sendMessage(sub: string, text: string, usernameToSend: string) {
      const loggedInUserData = loggedInUser();

      const sendTo = this.list.find((u) => u.username === usernameToSend);

      //populates the users recived we want to send a message too
      sendTo?.recievedMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: sendTo.username,
        sender: loggedInUserData?.username,
        date: this.date,
      });

      //populates the currently logged in users sent messages
      loggedInUserData?.sentMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: sendTo?.username,
        sender: loggedInUserData?.username,
        date: this.date,
      });
    },
  },
});
