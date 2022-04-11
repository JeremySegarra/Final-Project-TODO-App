import { defineStore } from "pinia";
import { list } from "../user";
import { currentDate } from "./current-date";
import { loggedInUser } from "./current-login-user";

export const userStore = defineStore("user", {
  state: () => ({
    counter: 1,
    list: list,
    date: currentDate(),
  }),

  actions: {
    addOne() {
      this.counter++;
    },
    async setNewUser(
      firstname: string,
      lastname: string,
      username: string,
      email: string,
      password: string
    ) {
      const user = {
        firstname,
        lastname,
        username,
        email,
        password,
        recievedMessages: [],
        myMessages: [],
        sentMessages: [],
      };

      try {
        const response = await fetch("/api/users/signup", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          response.text().then((text) => {
            throw new Error(text);
          });
        }
      } catch (err) {
        if (err.message === "User already exists") {
          throw err;
        }
        //Now that i caught the error message i can display it to the user somehow
        console.log("This is the error", err);
      }

      // this.list.push({
      //   firstName: firstname,
      //   lastName: lastname,
      //   username: username,
      //   email: email,
      //   password: password,
      //   verifypass: verify,
      //   recievedMessages: [],
      //   myMessages: [],
      //   sentMessages: [],
      //   id: this.counter,
      // });

      // this.addOne();

      //update function for backend post request to send data
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
