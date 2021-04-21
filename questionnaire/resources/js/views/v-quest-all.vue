<template>
    <section class="app__section questionnaire-table app__questionnaire">
        <div class="container">
            <div v-if="loading" class="loading"><span>Загрузка...</span></div>
            <div v-else-if="!loading && !error" class="questionnaire-table__wrapper">
                <div class="questionnaire-table__header">
                    <span>
                        Список анкет пользователя {{user}}
                    </span>
                    <div class="questionnaire-table__btns">
                        <router-link to="/edit" class="questionnaire-table__btn-add">Добавить</router-link>
                        <a href="#" class="questionnaire-table__btn-del" @click.prevent="deleteLine">Удалить</a>
                    </div>
                </div>
                <div class="questionnaire-table__wrap">
                    <table width="750px" border="1" class="table questionnaire__table">
                        <tbody>
                        <tr class="table__row-body" v-for="item in quests">
                            <td><input @click="checkTr" type="checkbox" :data-id="item.id"></td>
                            <td class="questionnaire-table__cell-title">
                                <router-link class="table__link"  :to="'/form/'+item.id">{{item.title}}</router-link>

                            </td>
                            <td class="questionnaire-table__cell-edit">
                                <router-link class="table__link" to="/edit">Правка</router-link>
                            </td>
                            <!--                            <td class="questionnaire-table__cell-result">{{item.res}}</td>-->
                            <td class="questionnaire-table__cell-result">
                                <router-link class="table__link" :title="item.title" :to="'/result/'+item.id"> результаты($)</router-link>
                            </td>
                            <!--                            <td class="questionnaire-table__cell-time">{{item.time}}</td>-->
                            <td class="questionnaire-table__cell-time">{{time}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="error error-404" v-else>Error!</div>
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
            time: '20.06.2010',
            loading: true,
            error: false
        }),
        mounted() {
            this.loadQuests();
        },
        methods: {
            loadQuests() {
                axios.get('/api/quest')
                    .then(response => {
                        this.quests = response.data;
                        setTimeout(()=>{
                            this.loading = false
                        }, 500)
                    })
                .catch(err=>{
                    this.loading = false
                    this.error = true
                    console.log(err)
                })
            },
            checkTr(e) {

                $(e.target).is(':checked') ? $(e.target).closest("tr").attr('data-select', 'select') : $(e.target).closest("tr").removeAttr("data-select");

                $('input[data-id]:checked').length >=1  ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true) : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
                    // ? $(e.target).closest("tr").attr('data-select', 'select')
                    // : $(e.target).closest("tr").removeAttr("data-select");
            },
            deleteLine(){
                $('tr[data-select]').remove()
                $("input[data-id]").filter("[disabled=disabled]").removeAttr('disabled')
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
    .table__link{
        display: inline-block;
        width: 100%;
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
        transition: all ease 1s;
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
