<template>
    <section class="app__section app__quest-form quest-page">
        <div class="app__form-wrapper quest-page__wrapper">
            <form action="#" class="form quest-form guest-page__form">
                <div class="form__input-w quest-form__inp-w ">
                    <span >ФИО</span>
                    <input type="text" class="form__input-q">
                </div>
                <div class="form__input-w quest-form__inp-w">
                    <span >Телефон</span>
                    <input type="tel" class="form__input-q">
                </div>
                <div class="form__input-w quest-form__inp-w">
                    <span >E-mail</span>
                    <input type="email" class="form__input-q">
                </div>
                <div class="form__input-w quest-form__inp-w">
                    <span >Вид оборудования</span>
                    <input type="text" class="form__input-q">
                </div>
                <div class="form__input-w quest-form__inp-w-check">
                    <input id="checktel" type="checkbox" >
                    <label for="checktel">Перезвоните мне</label>
                </div>
                <div class="form__input-w quest-form__inp-w">
                    <span for="">Ваши комментарии</span>
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

    </section>
</template>

<script>
    export default {
        name: "v-quest-page"
    }
</script>

<style scoped>

</style>
