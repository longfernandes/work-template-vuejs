import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import BrandPage from "../pages/BrandPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import CartPage from "../pages/CartPage.vue";
import LoginPage from "../pages/LoginPage.vue";


const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "", name: "Home", component: HomePage },
            { path: ":brand", name: "BrandPage", component: BrandPage },
            { path: ":brand/:id", name: "ProductDetailPage", component: ProductDetailPage },
            { path: "cart", name: "CartPage", component: CartPage },
            { path: "login", name: "LoginPage", component: LoginPage },
        ] 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
