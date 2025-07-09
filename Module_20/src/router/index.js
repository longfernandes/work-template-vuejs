import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MainLayout from '../layout/MainLayout.vue'
import TrendingTopic from '../pages/TrendingTopic.vue'
import ReportPage from '../pages/ReportPage.vue'
import AboutUsPage from '../pages/AboutUsPage.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'Home', component: HomePage },
            { path: 'trending', name: 'Trending', component: TrendingTopic },
            { path: 'report' , name: 'Report' , component: ReportPage},
            
        ]
    },
    { path: '/about' , name: 'about' , component: AboutUsPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
