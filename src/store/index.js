import Vue from 'vue'
import Vuex from 'vuex'

//Import Home Slide list
import homeSlideJSON from '@/data/homeSlide.json'

//Import properties data
import propertiesJSON from '@/data/properties.json'



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homeSlide: homeSlideJSON,
        properties: propertiesJSON
    }
})