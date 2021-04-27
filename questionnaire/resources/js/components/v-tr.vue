<template>

    <tr :data-idtr="id" class="table__row-body">
        <!--        <td class="table__checkbox"><input @click="checkTr" type="checkbox" :data-id="index"></td>-->
        <td class="table__checkbox">
<!--            <input @click="checkTr" type="checkbox" :data-id="id">-->
            <input @click="checked($event)" type="checkbox" :data-id="id" :disabled="disabled"  >
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
            title: {
                type: String
            },
            id:{
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
                if(event.target.checked){
                    this.$emit('checked', this.id)
                    console.log(event.target.checked)
                } else{
                    this.$emit('checked')
                    console.log(event.target.checked)
                }
                // console.log(this.id)
                // if (event.target.checkbox.checked){
                // this.$emit('checked', this.id)
                // console.log(event.target.checked)
                // } else {
                //     this.$emit('checked', this.id = '')
                // }

            },
            checkTr(e){
                // console.log($("input[data-id]"))
                $(e.target).is(':checked') ? $(e.target).closest("tr").attr('data-select', 'select') : $(e.target).closest("tr").removeAttr("data-select");

                $('input[data-id]:checked').length >=1  ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true) : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
                // document.querySelectorAll ('input[data-id]:checked').length >= 1 ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true) : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
                // if (document.querySelectorAll ('input[data-id]:checked').length >= 1){
                //     $("input[data-id]").filter(":not(':checked')").attr('disabled', true)
                    // let count = document.querySelectorAll('tr[data-select="select"]')
                    //     console.log($('input[type="checkbox"]:not(:checked)'))
                    //     $('input[data-id]:not(:checked)').each(function (i) {
                            // $(this).hover(function () {
                            //         alert('можно выбрать только одну строку');
                            // })
                            // $(this).prop('disable',true)
                        // })
                    // $("input[type=checkbox]").filter(":not(':checked')").on('click',()=>{return false})
                    // alert('можно выбрать только одну строку');
                    // $("input[type=checkbox]").filter(":not(':checked')")
                    // console.log($("input[data-id]").filter(":not(':checked')"))
                    // setTimeout(()=>{
                        // let count = document.querySelectorAll('tr[data-select="select"]')
                        // console.log(count)
                        // count[1].removeAttribute('data-select')
                    // }, 1000)

                    // let count = document.querySelectorAll('tr[data-select]')
                    // $(count[1]).removeAttr("data-select")
                    // $(e.target).closest("tr").attr("data-select") ? console.log('true'): console.log('false')
                    // $(e.target).closest("tr").removeAttr("data-select")
                // }
                // console.log(e.target.parentElement.parentElement);
                // console.log($(this).closest('tr'))
                // $(e.target).closest("tr").remove()

                // $(e.target).closest("tr").attr('data-select', 'select')
                // console.log(e.target); removeAttr("title")
                // console.log($(e.target));
                // e.target.parentElement.parentElement.setAttribute('data-select', 'select')

            }
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
