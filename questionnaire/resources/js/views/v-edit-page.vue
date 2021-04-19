<template>
    <section class="app__section app__edit-quest edit-quest">
        <div class="edit-quest__wrapper">
            <form action="#" class="edit-quest__form form">
                <div class="form__header">
                    <div class="form__header-col">
                        <div class="edit-quest__title"><span class="form__title">Название: </span>
                            <!--                            <input type="text" v-model="quests[title]">-->
                            <input type="text" value="Анкета 5">
                        </div>
                        <div class="edit-quest__btns-change">
                            <a href="#" @click.prevent="addLine" class="edit-quest__btn">Добавить поле</a>
                            <a href="" class="edit-quest__btn">Удалить поле</a>
                            <a href="" class="edit-quest__btn">Вверх</a>
                            <a href="" class="edit-quest__btn">Вниз</a>
                        </div>
                    </div>
                    <div class="form__header-col">
                        <div class="edit-quest__btns-save">
                            <a href="" class="edit-quest__btn-save">Просмотр</a>
                            <a href="" class="edit-quest__btn-save">Сохранить</a>
                            <a href="" class="edit-quest__btn-save">Отменить</a>
                        </div>
                    </div>
                </div>
                <div class="form__table">
                    <table class="table edit-quest__table">
                        <thead class="table__header">
                        <tr class="table__row">
                            <td class="table__header-cell"></td>
                            <td class="table__header-cell">Тип поля</td>
                            <td class="table__header-cell">Лэйбл</td>
                            <td class="table__header-cell">*</td>
                            <td class="table__header-cell">Значения</td>
                            <td class="table__header-cell">По умолчанию</td>
                        </tr>
                        </thead>
                        <tbody class="table__body">


                        <tr v-for="(row, index) in quests.options" class="table__row-body">
                            <td class="table__body-cell"><input type="checkbox"></td>
                            <td class="table__body-cell">
                                <select name="" class="table__select">
                                    <option value="text">Текс</option>
                                    <option value="tel">Телефон</option>
                                    <option value="email">e-mail</option>
                                    <option value="select">Комбо-бокс</option>
                                    <option value="checkbox">Чекбокс</option>
                                    <option value="textarea">Абзац</option>
                                </select>
                            </td>
                            <td class="table__body-cell">
                                <input type="text" :value="row.label">
                            </td>
                            <td class="table__body-cell">
                                <input type="checkbox" class="">
                                <!--                                <input type="checkbox" v-else="row.request" class="">-->
                            </td>
                            <td class="table__body-cell"><input type="text" :value="row.validValue"></td>
                            <td class="table__body-cell">
                                <select name="" class="table__select">

                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: "v-edit-page",
        data() {
            return {
                quests: {
                    title: 'Анкета №5',
                    options:
                        [
                            {
                                type: 'text',
                                label: 'Фио',
                                request: false,
                                validValue: ['Холодильники'],
                                default: ''
                            },
                            {
                                type: 'tel',
                                label: 'Телефон',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            },
                            {
                                type: 'text',
                                label: 'Телефон',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            },
                            {
                                type: 'text',
                                label: 'Телефон',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            },
                            {
                                type: 'text',
                                label: 'Телефон',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            }
                        ]
                },
                selectOpt: [{
                    text: 'Текст',
                    tel: 'Телефон',
                    email: 'E-mail',
                    select: 'Комбо-бокс',
                    checkbox: 'Чекбокс',
                    textarea: 'Абзац'

                }],
            }

        },
        methods: {
            addLine(){
                let tr = document.createElement('tr');
                tr.innerHTML = "      <td class=\"table__body-cell\"><input type=\"checkbox\"></td>\n" +
                    "                            <td class=\"table__body-cell\">\n" +
                    "                                <select name=\"\" class=\"table__select\">\n" +
                    "                                    <option value=\"text\">Текс</option>\n" +
                    "                                    <option value=\"tel\">Телефон</option>\n" +
                    "                                    <option value=\"email\">e-mail</option>\n" +
                    "                                    <option value=\"select\">Комбо-бокс</option>\n" +
                    "                                    <option value=\"checkbox\">Чекбокс</option>\n" +
                    "                                    <option value=\"textarea\">Абзац</option>\n" +
                    "                                </select>\n" +
                    "                            </td>\n" +
                    "                            <td class=\"table__body-cell\">\n" +
                    "                                <input type=\"text\" :value=\"row.label\">\n" +
                    "                            </td>\n" +
                    "                            <td class=\"table__body-cell\">\n" +
                    "                                <input type=\"checkbox\" class=\"\">\n" +
                    "                                <!--                                <input type=\"checkbox\" v-else=\"row.request\" class=\"\">-->\n" +
                    "                            </td>\n" +
                    "                            <td class=\"table__body-cell\"><input type=\"text\" :value=\"row.validValue\"></td>\n" +
                    "                            <td class=\"table__body-cell\">\n" +
                    "                                <select name=\"\" class=\"table__select\">\n" +
                    "\n" +
                    "                                </select>\n" +
                    "                            </td>"
                let table = document.querySelector('.table__body');
                table.append(tr);
            },

        }
    }
</script>

<style scoped>

</style>
