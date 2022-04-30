import { defineStore } from "pinia";
import { LoginStore } from "../store/login-session";

export const budgetStore = defineStore("budget", {
  state: () => ({
    budget: 0,
    list: [] as any,
    sessionStore: LoginStore(),
  }),
  actions: {
    async createBudget() {
      const user = this.sessionStore.session.user;
      console.log("This is the user in budget store", user);
      if (!user) {
        throw new Error("User not logged in");
      }

      const userStorage = {
        user: user.username,
        balance: 0,
        items: [] as any,
      };

      const response = await this.sessionStore.api(
        "budget/create",
        userStorage,
        "POST"
      );
      console.log("This is the response in the client", response);

      //This was an error when we first create the budget just put it in an if
      if (this.list.length > 0) {
        this.list = response.items.map((item: any) => {
          return {
            itemDescription: item.itemDescription,
            amount: item.amount,
          };
        });
      }

      console.log(
        "This is the response budget in create budget",
        response.budget
      );

      this.budget = response.budget;
      console.log("This is the list in the client", this.list);
    },

    async addItem(item: string, amount: number) {
      const user = this.sessionStore.session.user;
      console.log("This is the user in budget store", user);
      if (!user) {
        throw new Error("User not logged in");
      }

      const newItem = {
        itemDescription: item,
        amount,
      };

      const response = await this.sessionStore.api(
        "budget/add-item",
        newItem,
        "POST"
      );

      this.budget = response.budget;

      this.list = response.items.map((item: any) => {
        return {
          itemDescription: item.itemDescription,
          amount: item.amount,
        };
      });
    },
    async removeItem(index: number, budget: number) {
      const user = this.sessionStore.session.user;
      console.log("This is the user in budget store", user);
      if (!user) {
        throw new Error("User not logged in");
      }

      const item = this.list[index];

      const response = await this.sessionStore.api(
        "budget/delete-item",
        item,
        "DELETE"
      );
      console.log("This is the response to delete item", response);

      this.list.splice(index, 1);
    },
    async addFunds(budget: number) {
      const user = this.sessionStore.session.user;
      if (!user) {
        throw new Error("User not logged in");
      }

      const response = await this.sessionStore.api(
        "budget/add-funds",
        { budget },
        "PUT"
      );

      console.log("This is the response in the client to add funds", response);

      this.budget = +response;

      console.log("This is the budget in the client", this.budget);
    },

    async removeFunds(budget: number) {
      const user = this.sessionStore.session.user;
      if (!user) {
        throw new Error("User not logged in");
      }

      const response = await this.sessionStore.api(
        "budget/remove-funds",
        { budget },
        "PUT"
      );

      console.log(
        "This is the response in the client to remove funds",
        response
      );

      this.budget = +response;

      console.log("This is the budget in the client", this.budget);
    },
  },
});
