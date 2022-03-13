import { defineStore } from "pinia";
import { list } from "../models/user";

export const userCounter = defineStore("counter", {
  state: () => ({
    counter: 0,
    list: list,
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
  },
});
