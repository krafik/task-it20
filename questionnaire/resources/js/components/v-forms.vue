<template>
    <section class="app__section app__guest-form guest-form ">
        <div id="forms" class="app__form-wrapper guest-form__wrapper">
            <div class="guest-form__lbls">
                <label class="guest-form__p-form active  " title="Войти">
<!--                    <input name="tabs" id="login"  guest-form__p-form_active @click="loginChecked = !loginChecked" type="radio" checked>-->
                    Войти
                </label>
                <label class="guest-form__p-form"  title="Регистрация">
                    Регистрация
<!--                    <input name="tabs" id="registration" @click="loginChecked = !loginChecked" type="radio">-->
                </label>
            </div>
            <form action="#"  class="form form__hide active guest-form__form ">
                    <div class="form__input-w form__in-mail">
                        <span class="form__lbl">E-mail</span>
                        <input v-model="name" type="email" class="form__input">
                    </div>
                    <div class="form__input-w form__in-pass">
                        <span  class="form__lbl">Пароль</span>
                        <input type="text" class="form__input">
                    </div>
                <div class="form__input-w form__checkpass">
                    <input id="checkpass" type="checkbox" class="form__checkbox">
                    <label for="checkpass" class="form__lbl-check">Показать пароль</label>
                </div>
                <div class="form__input-w form-btn form__btn">
                    <button class="form-btn__btn-send">
                        Войти
                    </button>
                </div>
            </form>
            <form action="#"  class="form form__hide guest-form__form">
                    <div class="form__input-w form__in-name">
                        <label for="name" class="form__lbl">Имя</label>
                        <input id="name" type="text" class="form__input">
                    </div>
                    <div class="form__input-w form__in-mail">
                        <label for="" class="form__lbl">E-mail</label>
                        <input type="email" class="form__input">
                    </div>
                    <div class="form__input-w form__in-pass">
                        <label for="" class="form__lbl">Пароль</label>
                        <input type="text" class="form__input">
                    </div>

                <div class="form__input-w form__checkpass">
                    <input type="checkbox" class="form__checkbox">
                    <label for="" class="form__lbl-check">Показать пароль</label>
                </div>
                <div class="form__input-w form-btn form__btn">
                    <button class="form-btn__btn-send">
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
                // loginCheck:true

            }
        }
    }
</script>

<style scoped>

</style>
