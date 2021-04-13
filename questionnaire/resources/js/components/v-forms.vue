<template>
    <section class="app-forms app__forms">
        <div class="app-forms__wrapper">
            <div class="app-forms__p-form-lbls">
                <label class="app-forms__p-form " for="login" title="Войти">
                    <input name="tabs" id="login" @click="loginChecked = !loginChecked" type="radio" checked>Войти
                </label>
                <label class="app-forms__p-form" for="registration" title="Регистрация">
                    <input name="tabs" id="registration" @click="loginChecked = !loginChecked" type="radio">Регистрация
                </label>
            </div>
            <form action="#" v-if="loginChecked" class="form app-forms__form app-forms__form_active">
                <div class="form__inputs">
                    <div class="form__in-mail">
                        <label for="" class="form__lbl">E-mail</label>
                        <input v-model="name" type="email" class="form__input">
                    </div>
                    <div class="form__in-pass">
                        <label for="" class="form__lbl">Пароль</label>
                        <input type="text" class="form__input">
                    </div>
                </div>
                <div class="form__checkpass">
                    <input type="checkbox" class="form__checkbox">
                    <label for="" class="form__lbl">Показать пароль</label>
                </div>
                <div class="form__btn">
                    <button class="form__btn-send">
                        Войти
                    </button>
                </div>
            </form>
            <form action="#" v-else class="form app-forms__form">
                <div class="form__inputs">
                    <div class="form__in-name">
                        <label for="" class="form__lbl">Имя</label>
                        <input type="text" class="form__input">
                    </div>
                    <div class="form__in-mail">
                        <label for="" class="form__lbl">E-mail</label>
                        <input type="email" class="form__input">
                    </div>
                    <div class="form__in-pass">
                        <label for="" class="form__lbl">Пароль</label>
                        <input type="text" class="form__input">
                    </div>
                </div>
                <div class="form__checkpass">
                    <input type="checkbox" class="form__checkbox">
                    <label for="" class="form__lbl">Показать пароль</label>
                </div>
                <div class="form__btn">
                    <button class="form__btn-send">
                        Регистрация
                    </button>
                </div>
            </form>
        </div>


    </section>
</template>

<script>
    export default {
        name: "v-forms",
        data(){
            return{
                name:'',
                loginChecked:true

            }
        }
    }
</script>

<style scoped>

</style>
