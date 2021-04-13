import Vue from 'vue'
import Router from 'vue-router'

//View Components
import Home from '@/views/home'
import Propertie from '@/views/propertie'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/imovel/:name',
            name: 'HomePropertie',
            component: Propertie
        }
    ]
})