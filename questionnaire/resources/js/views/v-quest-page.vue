<template>
    <section class="app__section app__quest-form quest-page">
        <div v-if="loading" class="loading"><span>Загрузка...</span></div>
        <div v-else-if="!loading && !error" class="app__form-wrapper quest-page__wrapper">
            <form action="#" class="form quest-form quest-page__form">
                <strong>{{quest.title}}</strong>

                <div class="form__input-w form__input-bg quest-form__inp-w ">
                    <span class="quest-form__label">ФИО</span>
                    <input type="text" class="form__input-q">
                </div>
                <div class="form__input-w form__input-bg quest-form__inp-w">
                    <span class="quest-form__label">Телефон</span>
                    <input type="tel" class="form__input-q">
                </div>
                <div class="form__input-w form__input-bg quest-form__inp-w">
                    <span class="quest-form__label">E-mail</span>
                    <input type="email" class="form__input-q">
                </div>
                <div class="form__input-w form__input-bg quest-form__inp-w">
                    <span class="quest-form__label">Вид оборудования</span>
                    <input type="text" class="form__input-q">
                </div>
                <div class="form__input-w form__input-bg quest-form__inp-w-check">
                    <input id="checktel" type="checkbox">
                    <label for="checktel">Перезвоните мне</label>
                </div>
                <div class="form__input-w form__input-bg quest-form__inp-w">
                    <span class="quest-form__label" for="">Ваши комментарии</span>
                    <textarea class="form__input-q" name="comments" id="" cols="20" rows="3"></textarea>
                </div>

                <div class="form__input-w quest-form__footer">
                    <div class="captcha quest-form__captcha">
                        <span class="captcha__text">Число с картинки:</span>
                        <input type="text" class="captcha__img">
                        <input type="text" class="captcha__inp">
                    </div>

                    <button>Отправить</button>
                </div>
            </form>
        </div>
        <div class="error error-404" v-else>404</div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "v-quest-page",
        data: () => ({
            quest: [],
            loading: true,
            error: false,
            // title: 'some title'
            // notFound: false
        }),
        mounted() {
            this.loadQuest(this.$route.params.id)
            // this.loadQuest(id)
        },
        methods: {
            loadQuest(id) {
                axios.get(`api/quest/` + id)
                    .then(res => {
                        this.quest = res.data;
                        // console.log(res.data);
                        setTimeout(()=>{
                            this.loading = false
                        }, 500)
                    })
                    .catch(err => {
                        this.loading = false
                        this.error = true

                    })
                // console.log(axios.get())
                // axios.get('api/quest/'+id)
                // .then(res=>{
                //     this.quest = res.data;
                //     console.log(this.quest)
                // })
                // .catch(err=>{
                //     this.notFound = true
                // })
            }
        }
    }

</script>

<style scoped>

</style>
