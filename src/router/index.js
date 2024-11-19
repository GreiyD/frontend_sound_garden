import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegistrationView.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: LoginView,
            },
            {
                path: 'register',
                name: 'register',
                component: RegisterView,
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;