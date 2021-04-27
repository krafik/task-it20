import Vue from 'vue';
import Vuex from 'vuex';
import quest from './modules/quest';
import questAll from './modules/questAll'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        q: []
    },
    mutations: {
        updateQuests(state, quests) {
            console.log('уровень мутации')
            // state.quests = Object.assign({}, state.quests, quests)
            state.q = quests
        }
    },
    actions: {
        getQuests(ctx) {
         /*   fetch("/api/quest")
                .then((response) => {
                    console.log(response.data)
                    return response.json();
                })
                .then((data) => {
                    ctx.commit('updateQuests', data)
                    // console.log(typeof (data));
                });*/
            axios
                .get("/api/quest")
                .then((response) => {
                    const questsRes = response.data;
                    ctx.commit('updateQuests', questsRes)
                    console.log('уровень экшна')
                    console.log(questsRes)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    getters: {
        allQuests(state) {
            console.log('уровень геттера')
            return state.q
        }
    }
    /*modules: {
        quest
    }*/
})
