import { defineStore } from "pinia";
import { currentDate } from "./current-date";
import { LoginStore } from "./login-session";
import { useFriends } from "./friend-requests";

export const userStore = defineStore("user", {
  state: () => ({
    date: currentDate(),
    friendsStore: useFriends(),
    sessionStore: LoginStore(),
    list: [] as any,
  }),

  actions: {
    randomNumberGenerator() {
      return Math.floor(Math.random() * 30) + 1;
    },

    async editUser(userCredentials: any) {
      const sessionUser = this.sessionStore.session.user;
      if (!sessionUser) {
        throw new Error("User not logged in");
      }
      // console.log("edit user", userCredentials);
      console.log("this is the session user", sessionUser.username);
      // console.log(sessionUser.username);

      const response = await this.sessionStore.api(
        "users/edit-user",
        userCredentials,
        "PATCH"
      );
      console.log("this is the session user take 2", sessionUser.username);

      sessionUser.firstName = userCredentials.firstName;
      sessionUser.lastName = userCredentials.lastName;
      // sessionUser.username = userCredentials.userName;

      console.log("This is the edit response", response);
    },

    async addToDo(text: string) {
      const user = this.sessionStore.session.user;
      if (!user) {
        throw new Error("User not logged in");
      }

      const todo = { message: text };

      const response = await this.sessionStore.api("messages", todo, "POST");

      user.myMessages.push(todo);
    },
    deleteToDo(index: number) {
      const user = this.sessionStore.session.user;
      if (!user) {
        throw new Error("User not logged in");
      }
      const userMessage = user.myMessages[index].message;

      const payload = {
        message: userMessage,
        currentTab: "my-list",
      };

      console.log("this is the payload in the client", payload);

      const response = this.sessionStore.api(
        `messages/delete-message`,
        payload,
        "DELETE"
      );

      user.myMessages.splice(index, 1);
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
    },
  },
});
