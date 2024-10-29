import { createRouter, createWebHistory } from "vue-router";
import Products from '../components/Products.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Checkout from "../components/Checkout.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/dashboard',
        component: Products, // Product listing page

    },
    {
        path: '/products/:id',
        component: ProductDetails,
        name: 'ProductDetails',
        props: true,
    },
];

const router = createRouter( {
    history: createWebHistory(), // domain.com/users
    routes: routes,
}) 

export default router;