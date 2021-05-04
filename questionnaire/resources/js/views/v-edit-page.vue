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
                             :idTr=idTr
                             :disabled="idTr==null ? false : idTr !== index"
                             :isChecked="idTr==null ? false : idTr === index"
                             @checked="checkTrv2"
                        ></vTr>
                        <!--   <tr v-for="(row, index) in quests.options" :key="index" :data-line-id="index"
                                class="table__row-body">
                                <td class="table__checkbox"><input @click="checkTr" type="checkbox" :data-id="index"
                                                                   ></td>
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
                idTr: null,
                disabled: false,
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
                    ,
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
        computed: {},
        methods: {
            checkTrv2(id) {
                this.idTr = id
                console.log(id)

            },
            checkTr(e) {
                //если data-id совпадает с id совпадает с id строки в массиве, тогда disabled = disabled
                // for(let i=0, i<=this.quests.options.length, i++)
                if (e.target.checked) {
                    return console.log('false')
                } else {
                    return console.log('true')
                }
                // this.quests.options.forEach(function (item, i) {
                // if (e.target.getAttribute('data-id') === i) {
                //     this.disabled = true
                // }
                // else{
                //     this.disabled= false
                // }
                // })
                // if (e.target.getAttribute('data-id')) {
                //
                //
                // }
                // let id = e.target.getAttribute('data-id')
                // console.log(e.target.getAttribute('data-id'))
                // if (e.target.checked) {
                //     console.log('yes')
                // }
                // console.log(e.target.parentElement.parentElement.getAttribute('data-line-id'))

                // $(e.target).is(':checked') ? $(e.target).closest("tr").attr('data-select', 'select') : $(e.target).closest("tr").removeAttr("data-select");
                //
                // $('input[data-id]:checked').length >=1  ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true) : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
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
                console.log(this.quests.options)
            },
            deleteLine() {
                console.log(this.idTr)
                this.quests.options.splice(this.idTr, 1)
                this.idTr = null
                console.log(this.idTr)

            },
            up() {
                if (this.idTr === 0) {
                    alert('Переместить вверх нельзя. это первый элемент. только вниз')
                } else {
                    let cut = this.quests.options.splice(this.idTr, 1)
                    // console.log(cut)
                    this.quests.options.splice(this.idTr - 1, 0, ...cut)
                    this.idTr = this.idTr -1
                }

            },
            down() {
                if(this.idTr === this.quests.options.length -1){
                    alert('выбрана последняя строка. можно переместить только вверх ')
                } else {
                    let cut = this.quests.options.splice(this.idTr, 1)
                    this.quests.options.splice(this.idTr + 1, 0, ...cut)
                    this.idTr = this.idTr + 1
                }

            }
        }
    }
</script>

<style scoped>

</style>
