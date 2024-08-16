import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../components/Login.vue";
import RequestPassword from "../components/RequestPassword.vue";
import ResetPassword from "../components/ResetPassword.vue";
import Register from "../components/Register.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword
    },

    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword
    },

    {
        path: '/register',
        name: 'register',
        component: Register
    }

];

const router = createRouter( {
    history: createWebHistory(), // domain.com/users
    routes: routes,
}) 

export default router;