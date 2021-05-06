import Vue from 'vue'
import Router from 'vue-router'

//View Components
import Home from '@/views/home'
//--Property Views--
import PropertyIndex from '@/views/property'
import PropertyHome from '@/views/property/propertyHome'
import PropertyInfos from '@/views/property/propertyInfos'
import PropertyLazer from '@/views/property/propertyLazer'
import PropertyComum from '@/views/property/propertyComum'
import PropertyDecorado from '@/views/property/propertyDecorado'
import PropertyPlantas from '@/views/property/propertyPlantas'
import PropertyVideo from '@/views/property/propertyVideo'
import PropertyModel from '@/views/property/propertyModel'
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
                    path: 'infos',
                    name: 'PropertyInfo',
                    component: PropertyInfos
                },
                {
                    path: 'lazer',
                    name: 'PropertyLazer',
                    component: PropertyLazer
                },
                {
                    path: 'comum',
                    name: 'PropertyComum',
                    component: PropertyComum
                },
                {
                    path: 'decorado',
                    name: 'PropertyDecorado',
                    component: PropertyDecorado
                },
                {
                    path: 'plantas',
                    name: 'PropertyPlantas',
                    component: PropertyPlantas
                },
                {
                    path: 'video',
                    name: 'PropertyVideo',
                    component: PropertyVideo
                },
                {
                    path: 'modelo-3d',
                    name: 'PropertyModel',
                    component: PropertyModel
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