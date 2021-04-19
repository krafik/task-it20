import vueRouter from 'vue-router';
// import Vue from 'vue';

// Vue.use(vueRouter);

import Login from './views/v-forms.vue'
import Index from './views/v-quest-all'
import Edit from './views/v-edit-page'
import Form from './views/v-quest-page'
import Result from './views/v-res-page'

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/index",
        component: Index
    },
    {
        path: "/edit",
        component: Edit
    },
    {
        path: '/form/:id',
        component: Form,
    },
    {
        path: "/result",
        component: Result
    }
];

export default new vueRouter({
    mode: "history",
    routes: routes
})
