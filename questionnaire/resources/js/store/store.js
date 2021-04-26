import Vue from 'vue';
import Vuex from 'vuex';

import questAll from './modules/questAll'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        que: []
    },
    actions: {
        loadQuests(ctx) {
            axios.get('/api/quest')
                .then(response => {
                    const quests = response.data;
                    console.log('на уровне экшена', this.state.que)
                    // console.log(typeof(quests))
                    // console.log('объект контекст commit ', ctx.commit('updateQ', quests))
                    ctx.commit('updateQ', quests)
                    // ctx.commit('updateQ', quests)
                    // setTimeout(() => {
                    //     this.loading = false
                    // }, 500)
                })
                .catch(err => {
                    // this.loading = false
                    // this.error = true
                    console.log(err)
                })
        }
    },
    mutations: {
        updateQ(state, quests) {
            // console.log(state)
            // console.log(quests)
            // state.que = Object.assign({}, quests)
            // console.log(state.que)
            state.que = quests;
        }
    },

    getters: {
        allQuest(state) {
            console.log('на уровне геттера', state.que)
            return state.que
        }
    },
});
