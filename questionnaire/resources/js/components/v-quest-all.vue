<template>
    <section class="questionnaire-table app__questionnaire">
        <div class="container">
            <div class="questionnaire-table__wrapper">
                <div class="questionnaire-table__header">
                    <span>
                        Список анкет пользователя {{user}}
                    </span>
                    <div class="questionnaire-table__btns">
                        <button class="questionnaire-table__btn-add">Добавить</button>
                        <button class="questionnaire-table__btn-del">Удалить</button>
                    </div>
                </div>
                <div class="questionnaire-table__wrap">
                    <table width="750px" border="1" class="questionnaire__table">
                        <tbody>
                        <tr v-for="item in allQuest">
                            <td><input type="checkbox"></td>
                            <td class="questionnaire-table__cell-title">{{item.title}}</td>
                            <td class="questionnaire-table__cell-edit">Правка</td>
                            <td class="questionnaire-table__cell-result">{{item.res}}</td>
                            <td class="questionnaire-table__cell-time">{{item.time}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <!--  <table class="advantage-table">
              <thead>
              <tr>
                  <th class="advantage-table__cell advantage-table__title"></th>
                  <th class="advantage-table__cell advantage-table__title advantage-table__cell_active">Advogrand</th>
                  <th class="advantage-table__cell advantage-table__cell_others advantage-table__cell_others-top advantage-table__title">
                      Юридические компании
                  </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td class="advantage-table__cell advantage-table__info">Дополнительные услуги</td>
                  <td class="advantage-table__cell advantage-table__cell_active">Входят в абонемент</td>
                  <td class="advantage-table__cell advantage-table__cell_others">Оплачиваются отдельно</td>
              </tr>
              <tr>
                  <td class="advantage-table__cell advantage-table__info">Время работы</td>
                  <td class="advantage-table__cell advantage-table__cell_active">Круглосуточно</td>
                  <td class="advantage-table__cell advantage-table__cell_others">С 9:00 до 18:00</td>
              </tr>
              <tr>
                  <td class="advantage-table__cell advantage-table__info">Оплата</td>
                  <td class="advantage-table__cell advantage-table__cell_active">Всего 1 раз в год</td>
                  <td class="advantage-table__cell advantage-table__cell_others advantage-table__cell_others-bottom">
                      Каждый раз при обращении
                  </td>
              </tr>
              </tbody>
          </table>-->
    </section>
</template>

<script>
    export default {
        name: "v-quest-all",
        data() {
            return {
                allQuest: [
                    {
                        title: 'Анкета 1 для покупки многокамерных холодильников',
                        res: 'результаты(5)',
                        time: '20.06.2010'
                    },
                    {
                        title: 'Анкета 2 для заказа микроволновых печек',
                        res: 'результаты(15)',
                        time: '20.06.2010'
                    },
                    {
                        title: 'Анкета 3 для заказа вообще непонятно чего',
                        res: ' Результаты (8)',
                        time: '20.06.2010'
                    },
                    {
                        title: 'Анкета 4 для продажи и заказа спиртного',
                        res: ' Результаты (35)',
                        time: '20.06.2010'
                    }
                ],
                user: 'ivan@tygoy.com'


            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    }

    /*table caption{*/
    /*    display: block;*/
    /*}*/
    table td {
        /*text-align: center;*/
        padding: 5px;
        transition: all .3s
    ;
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
    .questionnaire-table__cell-result{
        cursor: pointer;
    }

    .questionnaire-table__cell-title:hover,
    .questionnaire-table__cell-edit:hover,
    .questionnaire-table__cell-result:hover{
        background-color: #c4c4c4;
    }
    .questionnaire-table__header{
        display: flex;
        justify-content: space-between;
    }
    .questionnaire-table__header span{
        font-weight: 700;   
    }
</style>
