import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    message: "Hello from Pinia!"
  }),
  actions: {
    updateMessage(newMsg) {
      this.message = newMsg;
    }
  }
});
