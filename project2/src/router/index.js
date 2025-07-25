import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import NewsPage from "../pages/NewsPage.vue";
import OderPage from "../pages/Oderpage.vue";
import SignupPage from "../pages/SignupPage.vue";
import SigninPage from "../pages/SigninPage.vue";
import MenuDetail from "../pages/MenuDetail.vue";
import CartPage from "../pages/CartPage.vue";
import ListMenuPage from "../pages/ListMenuPage.vue";
import GallaryPage from "../pages/GallaryPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import AndressPage from "../pages/AdressPage.vue";
import OderListPage from "../pages/OderListPage.vue";
import CouponsPage from "../pages/CouponsPage.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            { path: "", name: "Home", component: HomePage },
            { path: "menu", name: "Menu", component: MenuPage },
            { path: "about", name: "About", component: AboutPage },
            { path: "news", name: "News", component: NewsPage },
            { path: "oder", name: "Oder", component: OderPage },
            { path: "signup", name: "Signup", component: SignupPage },
            { path: "signin", name: "Signin", component: SigninPage },
            { path: "/menu/:id", name: "MenuDetail", component: MenuDetail },
            { path: "cart", name: "Cart", component: CartPage },
            { path: "list-menu", name: "ListMenu", component: ListMenuPage },
            { path: "gallery", name: "Gallary", component: GallaryPage },
            { path: "profile", name: "Profile", component: ProfilePage },
            { path: "address", name: "Address", component: AndressPage },
            { path: "orders" , name: "OderList", component: OderListPage },
            { path: "saved-codes", name: "Coupons", component: CouponsPage },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token");
    if (to.meta.requiresAuth && !token) {
        next("/signin");
    } else {
        next();
    }
});

export default router;
