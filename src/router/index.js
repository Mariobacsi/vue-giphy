import Vue from 'vue'
import VueRouter from 'vue-router'

import Giphy from '../views/Giphy.vue'
import Extra from '../views/Extra.vue'
import Internationalization from "@/views/Internationalization.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/giphy',
        name: 'Giphy',
        component: Giphy
    },
    {
        path: '/internationalization',
        name: 'Internationalization',
        component: Internationalization
    },
    {
        path: '/extra',
        name: 'Extra',
        component: Extra
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/Chat.vue')
    },
    {
        path: '/translator',
        name: 'Translator',
        component: () => import('../views/Translator.vue')
    },
    {
        path: '/image',
        name: 'Image',
        component: () => import('../views/ImageRecognition')
    }
]

const router = new VueRouter({
    routes
})

export default router
