/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.$ = require('jquery')
window.JQuery = require('jquery')

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('v-header', require('./components/v-header.vue').default);
Vue.component('v-forms', require('./components/v-forms.vue').default);
Vue.component('v-quest-all', require('./components/v-quest-all.vue').default);
Vue.component('v-quest-page', require('./components/v-quest-page.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});


$(document).ready(function () {
    $('#forms').on('click', '.guest-form__p-form', function () {
        $('#forms').find('.active').removeClass('active');
        $(this).addClass('active')
        console.log($(this).index())
        $('.form__hide').eq($(this).index()).addClass('active')
    })
})
