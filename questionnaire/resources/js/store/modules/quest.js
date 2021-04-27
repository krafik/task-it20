import axios from "axios";
// import vue from 'vue'
export default {
    state: {
        quests: []
    },
    mutations: {
        updateQuests(state, quests) {
            console.log('уровень мутации')
            this.Vue.set(state.quests, '0', quests)
            // state.quests = quests
        }
    },
    actions: {
        getQuests(ctx) {
            axios
                .get("/api/quest")
                .then((response) => {
                    const questsRes = response.data;
                    ctx.commit('updateQuests', questsRes)
                    console.log('уровень экшна')
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    getters: {
        allQuests(state) {
            console.log('уровень геттера')
            return state.quests
        }
    }
}
