<template>
    <section class="app__section res-page app__res-page">
        <!--        <div class="container">-->
        <div v-if="loading" class="loading"><span>Загрузка...</span></div>
        <div v-else-if="!loading && !error" class="res-page__wrapper">
            <div class="res-page__header">
                <span class="res-page__text">{{title}}</span>
                <a class="res-page__del-btn">Удалить</a>
            </div>
            <div class="res-page__table-wrap">
                <table class="table">
                    <tbody>
                    <tr v-for="(item, index) in res" class="table__row-body">
                        <td class="table__fcol">
                            <div class="table__input">
                                <input @click="checkTr" type="checkbox" :data-id="index">
                            </div>
                            <div class="table__ftext-col">
                                <div class="name"><span class="tabl__ncell">Фио:</span> <span class="table__vcell">{{item.name}}</span>
                                </div>
                                <div class="tel"><span class="tabl__ncell">Телефон:</span> <span class="table__vcell">{{item.phone}}</span>
                                </div>
                                <div class="email"><span class="tabl__ncell">E-mail:</span> <span class="table__vcell">{{item.email}}</span>
                                </div>
                                <div class="equip"><span class="tabl__ncell">Вид оборудования:</span> <span
                                    class="table__vcell">{{item.equip}}</span></div>
                            </div>

                        </td>
                        <td class="table__scol">
                            <div class="table__stext_col">
                                <div class="callbacl"><span class="tabl__ncell">Перезвонить мне:</span> <span
                                    class="table__vcell">{{item.callback}}</span></div>
                                <div class="comment"><span class="tabl__ncell">Ваши комментарии:</span> <span
                                    class="table__vcell">{{item.comment}}</span></div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="error error-404" v-else>404</div>
    </section>
</template>

<script>
    export default {
        name: "v-res-page",
        data() {
            return {
                result: [
                    {
                        name: 'Иванов Иван Иванович',
                        phone: '2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'нет',
                        comment: 'Дайте холодос в каторый можно класть пиво.'
                    },
                    {
                        name: 'Иванов Петр Иванович',
                        phone: '2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment: 'Дайте холодос в каторый можно класть пиво.'
                    }, {
                        name: 'Иванов Сергей Иванович',
                        phone: '2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment: 'Дайте холодос в каторый можно класть пиво.'
                    }, {
                        name: 'Иванов Иван Иванович',
                        phone: '2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment: 'Дайте холодос в каторый можно класть пиво.'
                    }
                ],
                res: [],
                loading: true,
                error: false,
            }
        },
        props: {
            title: {
                type: String,
                default: 'here is must be title'
            }
        },
        mounted() {
            this.loadResult(this.$route.params.id);

        },
        methods: {
            loadResult(id) {
                axios.get('api/result/' + id)
                    .then(response => {
                        this.res = response.data;
                        setTimeout(() => {
                            this.loading = false
                        }, 500)
                        console.log(response);
                    })
                    .catch(err => {
                        this.loading = false
                        this.error = true

                    })
            },
            checkTr(e) {

                $(e.target).is(':checked') ? $(e.target).closest("tr").attr('data-select', 'select') : $(e.target).closest("tr").removeAttr("data-select");

                $('input[data-id]:checked').length >= 1 ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true) : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
                // ? $(e.target).closest("tr").attr('data-select', 'select')
                // : $(e.target).closest("tr").removeAttr("data-select");
            },
            deleteLine() {
                $('tr[data-select]').remove()
                $("input[data-id]").filter("[disabled=disabled]").removeAttr('disabled')
            }
        }
    }
</script>

<style scoped>

</style>
