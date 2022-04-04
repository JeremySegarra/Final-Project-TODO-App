import { defineStore } from "pinia";

export const budgetStore = defineStore("budget", {
  state: () => ({
    budget: 0,
  }),
  actions: {
    addAmount(amount: number) {
      this.budget += amount;
    },
    removeAmount(amount: number) {
      this.budget -= amount;
    },
  },
});
