import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePages.vue";
import Projects from "../pages/ProjectPages.vue";
import Contact from "../pages/ContactPages.vue";
import Profile from "../pages/ProfilePages.vue";
import Zalo from "../pages/Zalo.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/projects", name: "Projects", component: Projects },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/profile", name: "Profile", component: Profile },
    {
        path: "/zalo",
        name: "Zalo",
        component: Zalo,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
