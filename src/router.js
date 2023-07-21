import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import PostList from './pages/PostList.vue';
import ErrorNotFound from './pages/ErrorNotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/about-us",
            name: "about",
            component: AppAbout
        },
        {
            path: "/posts",
            name: "posts",
            component: PostList
        },
        {
            path: "/not-found",
            name: "not-found",
            component: ErrorNotFound
        }

    ]
});

export { router };