/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue/dist/vue');

window.$ = require('jquery')
window.JQuery = require('jquery')


import VueRouter from 'vue-router'
Vue.use(VueRouter)

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



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import router from './router';

const app = new Vue({
    el: '#app',
    router,
    // render: h => h(app)
    // methods:{
    //     deleteLine(){
    //         $('tr[data-select]').remove()
    //         $("input[data-id]").filter("[disabled=disabled]").removeAttr('disabled')
    //     },
    //     checkTr(e){
    //         $(e.target).is(':checked')
    //             ? $(e.target).closest("tr").attr('data-select', 'select')
    //             : $(e.target).closest("tr").removeAttr("data-select");
    //
    //         $('input[data-id]:checked').length >=1
    //             ? $("input[data-id]").filter(":not(':checked')").attr('disabled', true)
    //             : $("input[data-id]").filter(":not(':checked')").attr('disabled', false);
    //     }
    // }
})


$(document).ready(function () {
    $('#forms').on('click', '.guest-form__p-form', function () {
        $('#forms').find('.active').removeClass('active');
        $(this).addClass('active')
        $('.form__hide').eq($(this).index()).addClass('active')
    })


})
