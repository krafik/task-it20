<template>
    <section class="app__section res-page app__res-page">
<!--        <div class="container">-->
            <div class="res-page__wrapper">
                <div class="res-page__header">
                    <span class="res-page__text">Анкета 1 "заказ холодильных камер - результаты</span>
                    <button class="res-page__del-btn">Удалить</button>
                </div>
                <div class="res-page__table-wrap">
                    <table class="table">
                        <tbody>
                        <tr v-for="item in result">
                            <td class="table__fcol">
                                <div class="table__input">
                                    <input type="checkbox">
                                </div>
                                <div class="table__ftext-col">
                                    <div class="name"><span class="tabl__ncell">Фио:</span> <span  class="table__vcell">{{item.name}}</span></div>
                                    <div class="tel"><span class="tabl__ncell">Телефон:</span> <span  class="table__vcell">{{item.phone}}</span></div>
                                    <div class="email"><span class="tabl__ncell">E-mail:</span> <span  class="table__vcell">{{item.email}}</span></div>
                                    <div class="equip"><span class="tabl__ncell">Вид оборудования:</span> <span  class="table__vcell">{{item.equip}}</span></div>
                                </div>

                            </td>
                            <td class="table__scol">
                                <div class="table__stext_col">
                                    <div class="callbacl"><span class="tabl__ncell">Перезвонить мне:</span> <span  class="table__vcell">{{item.callback}}</span></div>
                                    <div class="comment"><span class="tabl__ncell">Ваши комментарии:</span> <span class="table__vcell">{{item.comment}}</span></div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
<!--        </div>-->
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
                        phone:'2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'нет',
                        comment:'Дайте холодос в каторый можно класть пиво.'
                    },
                    {
                        name: 'Иванов Петр Иванович',
                        phone:'2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment:'Дайте холодос в каторый можно класть пиво.'
                    },{
                        name: 'Иванов Сергей Иванович',
                        phone:'2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment:'Дайте холодос в каторый можно класть пиво.'
                    },{
                        name: 'Иванов Иван Иванович',
                        phone:'2343216579',
                        email: 'some@email.com',
                        equip: 'Холодильник',
                        callback: 'да',
                        comment:'Дайте холодос в каторый можно класть пиво.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
