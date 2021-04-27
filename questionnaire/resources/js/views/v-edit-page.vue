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
                            <a href="addLine" @click.prevent="addL" class="edit-quest__btn">Добавить поле</a>
                            <a href="deleteLine" @click.prevent="deleteLine" class="edit-quest__btn">Удалить поле</a>
                            <a href="up" @click.prevent="up" class="edit-quest__btn">Вверх</a>
                            <a href="down" @click.prevent="down" class="edit-quest__btn">Вниз</a>
                        </div>
                    </div>
                    <div class="form__header-col">
                        <div class="edit-quest__btns-save">
                            <a href="#" class="edit-quest__btn-save">Просмотр</a>
                            <a href="#" class="edit-quest__btn-save">Сохранить</a>
                            <a href="#" class="edit-quest__btn-save">Отменить</a>
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
                        <vTr v-for="(row, index) in quests.options"
                             :id="index"
                             :label="row.label"
                             :option="row.option"
                             :value="row.validValue"
                             :key="index"
                             :disabled="false"
                             @checked="displayMessage"
                        ></vTr>
                        <!-- <tr v-for="(row, index) in quests.options" class="table__row-body">
                             <td class="table__checkbox"><input @click="checkTr" type="checkbox" :data-id="index"></td>
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
                             </td>
                             <td class="table__body-cell"><input type="text" :value="row.validValue"></td>
                             <td class="table__body-cell">
                                 <select name="" class="table__select">

                                 </select>
                             </td>
                         </tr>-->
                        </tbody>
                    </table>
<!--                    :disabled="idTr != index ? true : false"-->
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    import vTr from '../components/v-tr'

    export default {
        name: "v-edit-page",
        components: {
            vTr
        },
        data() {
            return {
                idTr: '',
                // disabled: false,
                quests: {
                    title: 'Анкета №5',
                    options:
                        [
                            {
                                type: 'text',
                                option: 'Текст',
                                label: 'Фио',
                                request: false,
                                validValue: ['Холодильники'],
                                default: ''
                            },
                            {
                                type: 'tel',
                                option: 'Телефон',
                                label: 'Телефон',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            },
                            {
                                type: 'email',
                                option: 'Email',
                                label: 'Email',
                                request: true,
                                validValue: [''],
                                default: ''
                            },
                            {
                                type: 'select',
                                option: 'Комбобокс',
                                label: 'Вид оборудования',
                                request: true,
                                validValue: [''],
                                default: ''
                            },
                            {
                                type: 'checkbox',
                                option: 'Чекбокс',
                                label: 'Перезвоните мне',
                                request: true,
                                validValue: ['Микроволновки'],
                                default: ''
                            },
                            {
                                type: 'textarea',
                                option: 'Абзац',
                                label: 'Ваши комментарии',
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
        computed:{

        },
        methods: {
            displayMessage(id = '') {
                this.idTr = id
                // console.log('id' + id)
                console.log(this.idTr)
            },
            addL() {
                const newLine = {
                    type: 'text',
                    option: '',
                    label: '',
                    request: true,
                    validValue: [],
                    default: ''
                }
                this.quests.options.push(newLine);
            },
            deleteLine() {

                // $('input[data-id]').each(function () {
                //     $(this).prop('checked') ? $(this).prop('checked').closest('tr').remove() : console.log("none")
                // })
                $('tr[data-select]').remove()
                $("input[data-id]").filter("[disabled=disabled]").removeAttr('disabled')
                // let check = document.querySelectorAll("input[data-id]");


                // let check = document.querySelectorAll("input[data-id]");
                // check.forEach(function (item, i, check) {
                //         // if(item[i].checked){
                //         //     console.log(item[i] + 'is checked')
                //         // }
                //
                //     console.log(item[i])
                // })


                //если инпут с любым дата id был выбран, тогда удаляем его родителя
                // check.forEach(function (item, i, check) {
                //     console.log();
                // })
                // $('#checkpass').is(':checked') ? inp[0].type = 'password' : inp[0].type = 'text'
                // console.log(check);
            },
            up() {
                $('tr[data-select]').after($('tr[data-select]').prev());
            },
            down() {
                $('tr[data-select]').before($('tr[data-select]').next());
            }
        }
    }
</script>

<style scoped>

</style>
