import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppProjectSlug from './pages/AppProjectSlug.vue';
import AppAboutMe from './pages/AppAboutMe.vue';

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: AppHome
        },
        {
            path:'/projects',
            name:'projects',
            component: AppProjects
        },
        {
            path:'/projects/:slug',
            name:'project',
            component: AppProjectSlug
        },
        {
            path:'/about-me',
            name:'about-me',
            component: AppAboutMe
        },
    ]
});

export {router};