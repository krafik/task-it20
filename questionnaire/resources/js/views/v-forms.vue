<template>
    <section class="app__section app__guest-form guest-form ">
        <div id="forms" class="app__form-wrapper guest-form__wrapper">
            <div class="guest-form__lbls">
                <label class="guest-form__p-form active  " title="Войти">
                    <!--                    <input name="tabs" id="login"  guest-form__p-form_active @click="loginChecked = !loginChecked" type="radio" checked>-->
                    Войти
                </label>
                <label class="guest-form__p-form" title="Регистрация">
                    Регистрация
                    <!--                    <input name="tabs" id="registration" @click="loginChecked = !loginChecked" type="radio">-->
                </label>
            </div>
            <form action="#" class="form form__hide active guest-form__form ">
                <div class="form__input-w form__in-mail">
                    <span class="form__lbl">E-mail</span>
                    <input v-model.trim="emailLogin" @keypress="blockSymbols" type="email" class="form__input">
                </div>
                <div class="form__input-w form__in-pass">
                    <span class="form__lbl">Пароль</span>
                    <input v-model="passLogin" type="text" class="form__input pass">

                </div>
                <div class="form__input-w form__checkpass">
                    <input id="checkpass" @click="changepass" type="checkbox" class="form__checkbox">
                    <label for="checkpass" class="form__lbl-check">Скрывать пароль</label>
                </div>
                <div class="form__input-w form-btn form__btn">
                    <button class="form-btn__btn-send">
                        Войти
                    </button>
                </div>
            </form>
            <form action="#" class="form form__hide guest-form__form">
                <div class="form__input-w form__in-name">
                    <span class="form__lbl">Имя</span>
                    <input id="name" type="text" @keypress="blockSymbols" class="form__input">
                </div>
                <div class="form__input-w form__in-mail">
                    <span class="form__lbl">E-mail</span>
                    <input type="email" class="form__input">
                </div>
                <div class="form__input-w form__in-pass">
                    <span class="form__lbl">Пароль</span>
                    <input type="text" class="form__input pass">
                </div>

                <div class="form__input-w form__checkpass">
                    <input id="checkpass2" type="checkbox" @click="changepass" class="form__checkbox">
                    <label for="checkpass2" class="form__lbl-check">Показать пароль</label>
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
        data() {
            return {
                emailLogin: '',
                passLogin: '',
                nameRegister: '',
                emailRegister: '',
                passRegister: ''
                // loginCheck:true

            }
        },
        methods: {
            changepass:  function() {
                let inp = document.querySelectorAll('.pass');
                $('#checkpass').is(':checked') ? inp[0].type = 'password' : inp[0].type = 'text'
                $('#checkpass2').is(':checked') ? inp[1].type = 'password' : inp[1].type = 'text'
            },
            blockSymbols: function (event) {
                if (/\<|\>|\?|\!|\%|\*|\&|[а-яА-ЯёЁ]/.test(event.key)) {
                    event.preventDefault();
                }
            }

        }

    }
</script>

<style scoped>

</style>
