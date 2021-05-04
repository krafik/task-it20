<template>

    <tr :data-idtr="id" class="table__row-body">
        <!--        <td class="table__checkbox"><input @click="checkTr" type="checkbox" :data-id="index"></td>-->
        <td class="table__checkbox">
<!--            <input @click="checkTr" type="checkbox" :data-id="id">-->
            <input @click="checked($event)" :checked="isChecked" type="checkbox" :data-id="id" :disabled="disabled"  >
        </td>
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
            <input type="text" :value="label">

        </td>
        <td class="table__body-cell">
            <input type="checkbox" class="">
        </td>
        <td class="table__body-cell"><input type="text" :value="value"></td>
        <td class="table__body-cell">
            <select name="" class="table__select">

            </select>
        </td>
    </tr>

    <!--    <h1>hi</h1>-->
</template>

<script>

    export default {

        name: "v-tr",
        data(){
            return{
                arr:[]
            }

        },
        props: {
            // dataId:{
            //     type: String,
            //     default: "NULL"
            // }
            isChecked:{
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            id:{
                type: Number
            },
            idTr:{
                type: Number
            },
            label:{
                type: String
            },
            value:{
                type: Array,
                default:"NULL"
            },
            disabled:{
                type: Boolean,
                default: false
            }
        },
        methods:{
            checked(event){
                event.target.checked ? this.$emit('checked', this.id) : this.$emit('checked',null)
                // console.log(event.target.parent)
                // console.log(document.querySelector(`tr[data-idtr="${this.id}"]`).parentNode)
                // event.target.checked ? document.querySelector(`tr[data-idtr="${this.id}"]`).setAttribute('data-select','select') : document.querySelector(`tr[data-idtr="${this.id}"]`).removeAttribute('data-select')
            },
        }
    }
</script>

<style scoped>

</style>
<!--<vTr v-for="(row, index) in quests.options"-->
<!--     :id="index"-->
<!--     :label="row.label"-->
<!--     :value="row.validValue"-->
<!--     :key="row.id"-->
<!--&gt;</vTr>-->
