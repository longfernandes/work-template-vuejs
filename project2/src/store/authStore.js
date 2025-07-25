// store/authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token") || null,
        user: JSON.parse(localStorage.getItem("user") || "null"),
    }),
    actions: {
        login(token, user) {
            this.token = token;
            this.user = user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
        init() {
            this.token = localStorage.getItem("token") || null;
            const userStr = localStorage.getItem("user");
            this.user = userStr ? JSON.parse(userStr) : null;
        },
    },
});
