// store/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      const found = this.items.find((i) => i.id === item.id);
      if (found) {
        found.quantity += item.quantity || 1;
      } else {
        this.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    clearCart() {
      this.items = [];
    },
  },
});
