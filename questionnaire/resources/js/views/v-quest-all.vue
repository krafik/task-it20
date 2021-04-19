<template>
    <section class="app__section questionnaire-table app__questionnaire">
        <div class="container">
            <div class="questionnaire-table__wrapper">
                <div class="questionnaire-table__header">
                    <span>
                        Список анкет пользователя {{user}}
                    </span>
                    <div class="questionnaire-table__btns">
                        <router-link to="/edit" class="questionnaire-table__btn-add">Добавить</router-link>
                        <a href="#" class="questionnaire-table__btn-del">Удалить</a>
                    </div>
                </div>
                <div class="questionnaire-table__wrap">
                    <table width="750px" border="1" class="questionnaire__table">
                        <tbody>
                        <tr v-for="item in quests">
                            <td><input type="checkbox"></td>
                            <td class="questionnaire-table__cell-title">
                                <router-link :to="'/form/'+item.id">{{item.title}}</router-link>

                            </td>
                            <td class="questionnaire-table__cell-edit">
                                <router-link to="/edit">Правка</router-link>
                            </td>
                            <!--                            <td class="questionnaire-table__cell-result">{{item.res}}</td>-->
                            <td class="questionnaire-table__cell-result">
                                <router-link :to="'/result/'+item.id"> результаты($)</router-link>
                            </td>
                            <!--                            <td class="questionnaire-table__cell-time">{{item.time}}</td>-->
                            <td class="questionnaire-table__cell-time">{{time}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "v-quest-all",
        data: () => ({
            quests: [],
            user: 'ivan@tygoy.com',
            time: '20.06.2010'
        }),
        mounted() {
            this.loadQuests();

        },
        methods: {
            loadQuests() {
                axios.get('/api/quest')
                    .then(res => {
                        this.quests = res.data;
                        console.log(res.data);
                    })
            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    }

    table td {
        padding: 5px;
        transition: all .3s;
    }

    table thead,
    table tr:nth-child(even) {
        background: #ccc;
    }

    table td:not(:last-child) {
        border-right: 1px solid;
    }

    .questionnaire-table__wrap {
        overflow-x: auto;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    }

    .questionnaire-table__cell-title,
    .questionnaire-table__cell-edit,
    .questionnaire-table__cell-result {
        cursor: pointer;
    }

    .questionnaire-table__cell-title:hover,
    .questionnaire-table__cell-edit:hover,
    .questionnaire-table__cell-result:hover {
        background-color: #c4c4c4;
    }

    .questionnaire-table__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .questionnaire-table__header span {
        font-weight: 700;
    }

    .questionnaire-table__btn-del {
        margin-left: 5px;
    }

    .questionnaire-table__btn-add a,
    .questionnaire-table__btn-del a {
        color: #181818;
    }

    .questionnaire-table__btn-add a:hover,
    .questionnaire-table__btn-del a:hover {
        color: #181818;
        text-decoration: none
    }

</style>
