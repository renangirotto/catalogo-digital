import Vue from 'vue'
import Router from 'vue-router'

//View Components
import Home from '@/views/home'
//--Property Views--
import PropertyIndex from '@/views/property'
import PropertyHome from '@/views/property/propertyHome'
import PropertyMap from '@/views/property/propertyMap'

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
            path: '/imovel/:propertyName',
            component: PropertyIndex,
            children: [
                {
                    path: '',
                    name: 'PropertyHome',
                    component: PropertyHome
                },
                {
                    path: 'mapa',
                    name: 'PropertyMap',
                    component: PropertyMap
                },
            ]
        },
    ]
})