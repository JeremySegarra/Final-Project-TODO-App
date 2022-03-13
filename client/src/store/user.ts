import { defineStore } from "pinia";
import { list } from "../models/user";
import * as loggedUser from "../store/login-session";
import { currentDate } from "./current-date";

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
      const loginStore = loggedUser.LoginStore();
      const sessionUser = loginStore.session.user?.username;
      const loggedInUserData = this.list.find(
        (u) => u.username === sessionUser
      );

      loggedInUserData?.myMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: loggedInUserData.username,
        sender: sessionUser,
        date: this.date,
      });
    },
    deleteMessage(index: number) {
      const loginStore = loggedUser.LoginStore();
      const currentUser = loginStore.session.user?.username;
      const foundUser = this.list.find((u) => u.username === currentUser);

      foundUser?.myMessages.splice(index, 1);
    },
    deleteMySentMessage(index: number) {
      const loginStore = loggedUser.LoginStore();
      const currentUser = loginStore.session.user?.username;
      const foundUser = this.list.find((u) => u.username === currentUser);

      foundUser?.sentMessages.splice(index, 1);
    },
    deleteMyRecievedMessage(index: number) {
      const loginStore = loggedUser.LoginStore();
      const currentUser = loginStore.session.user?.username;
      const foundUser = this.list.find((u) => u.username === currentUser);

      foundUser?.recievedMessages.splice(index, 1);
    },
    sendMessage(sub: string, text: string, usernameToSend: string) {
      const loginStore = loggedUser.LoginStore();
      const sessionUser = loginStore.session.user?.username;
      const loggedInUserData = this.list.find(
        (u) => u.username === sessionUser
      );
      const sendTo = this.list.find((u) => u.username === usernameToSend);

      //populates the users recived we want to send a message too
      sendTo?.recievedMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: sendTo.username,
        sender: sessionUser,
        date: this.date,
      });

      //populates the currently logged in users sent messages
      loggedInUserData?.sentMessages.push({
        isActive: false,
        completed: false,
        subject: sub,
        message: text,
        reciever: loggedInUserData.username,
        sender: sessionUser,
        date: this.date,
      });
    },
  },
});
