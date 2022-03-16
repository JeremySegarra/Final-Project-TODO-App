import { defineStore } from "pinia";
import { list } from "../user";
import { currentDate } from "./current-date";
import { loggedInUser } from "./current-login-user";

export const userCounter = defineStore("counter", {
  state: () => ({
    counter: 0,
    list: list,
    date: currentDate(),
  }),

  actions: {
    addOne() {
      this.counter++;
    },
    setNewUser(index: number) {
      //try not to add an empty user just add 1 at a time fix tomorrow
      this.list.push({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        verifypass: "",
        recievedMessages: [],
        myMessages: [],
        sentMessages: [],
        id: index + 1,
      });
      this.addOne();

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
    deleteMessage(index: number) {
      const loggedInUserData = loggedInUser();

      loggedInUserData?.myMessages.splice(index, 1);
    },
    deleteMySentMessage(index: number) {
      const loggedInUserData = loggedInUser();

      loggedInUserData?.sentMessages.splice(index, 1);
    },
    deleteMyRecievedMessage(index: number) {
      const loggedInUserData = loggedInUser();

      loggedInUserData?.recievedMessages.splice(index, 1);
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
