import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1
    },
    actions: {},
    mutations: {
        increment(state) {
            // изменяем состояние
            state.count++;
        }
    },

    getters: {
        doneTodos: state => {
            return state.count
        }
    },
})
