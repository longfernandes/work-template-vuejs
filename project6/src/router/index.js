import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import MainLayout from "../layout/MainLayout.vue";

const routes = [
    {
        path: "/",
        componennt: MainLayout,
        children: [
            { path: "/", name: "Home", component: HomePage },
            { path: "about", name: "About", component: AboutPage },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
