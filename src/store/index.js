import Vue from 'vue'
import Vuex from 'vuex'

//State
const state = {
    homeSlide: [],
    properties: []
}

//Getters
const getters = {
    getHomeSlide: (state) => state.homeSlide,
    getProperties: (state) => state.properties,
}

//Actions
const actions = {
    fetchHero({ commit }) {
        fetch(`${process.env.BASE_URL}static/data/homeSlide.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                commit('SET_HERO', json.images)
            })
            .catch((err) => {
                console.log(err);
            });
    },
    fetchProperties({ commit }) {
        fetch(`${process.env.BASE_URL}static/data/properties.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                commit('SET_PROPERTIES', json.properties)
            })
            .catch((err) => {
                console.log('fetchProperties:', err);
            });
    }
}

//Mutations
const mutations = {
    SET_HERO(state, images) {
        state.homeSlide = images
    },
    SET_PROPERTIES(state, images) {
        state.properties = images
    }
}

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})