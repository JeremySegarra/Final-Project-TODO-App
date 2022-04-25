import { defineStore } from "pinia";
import { currentDate } from "./current-date";
import { LoginStore } from "./login-session";
import { useFriends } from "./friend-requests";
import { api, modulerApi } from "../myFetch";

export const userStore = defineStore("user", {
  state: () => ({
    date: currentDate(),
    friendsStore: useFriends(),
    sessionStore: LoginStore(),
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
      // const loggedInUserData = loggedInUser();
      // loggedInUserData?.myMessages.push({
      //   isActive: false,
      //   completed: false,
      //   subject: sub,
      //   message: text,
      //   reciever: loggedInUserData.username,
      //   sender: loggedInUserData.username,
      //   date: this.date,
      // });
    },
    async deleteMessage(index: number, messageTab: String, messages: any) {
      const user = this.sessionStore.session.user;
      let message;

      if (!user) {
        throw new Error("You are not logged in");
      }

      switch (messageTab) {
        case "my-list":
          message = user.myMessages.splice(index, 1);
          break;
        case "recieved":
          message = user.recievedMessages.splice(index, 1);
          break;
        default:
          message = user.sentMessages.splice(index, 1);
      }

      //do api call here already updated locally
      const payload = { ...message[0], currentTab: messageTab };
      console.log("This is the payload: ", payload);

      const deleteMessage = await this.sessionStore.api(
        "messages/delete-message",
        payload,
        "DELETE"
      );
      console.log("This is the delete message: ", deleteMessage);
    },

    async sendMessage(index: number, message: string) {
      const user = this.sessionStore.session.user;

      if (!user) {
        throw new Error("You are not logged in");
      }

      const friend = JSON.parse(JSON.stringify(user.friendsList[index]));

      const data = {
        message,
        reciever: friend.username,
        sender: user.username,
        date: this.date,
      };

      //reason why i was not getting instant results in the list was i was passing data{} and not spreading it
      user.sentMessages.push({
        ...data,
      });

      // console.log("this is user.sentMessages", user.sentMessages);

      const sentMessage = await this.sessionStore.api(
        "messages/send",
        data,
        "POST"
      );

      console.log("This is the sent message response", sentMessage);

      // const loggedInUserData = loggedInUser();
      // const sendTo = this.list.find((u) => u.username === usernameToSend);
      //populates the users recived we want to send a message too
      // sendTo?.recievedMessages.push({
      //   isActive: false,
      //   completed: false,
      //   subject: sub,
      //   message: text,
      //   reciever: sendTo.username,
      //   sender: loggedInUserData?.username,
      //   date: this.date,
      // });
      // //populates the currently logged in users sent messages
      // loggedInUserData?.sentMessages.push({
      //   isActive: false,
      //   completed: false,
      //   subject: sub,
      //   message: text,
      //   reciever: sendTo?.username,
      //   sender: loggedInUserData?.username,
      //   date: this.date,
      // });
    },
  },
});
