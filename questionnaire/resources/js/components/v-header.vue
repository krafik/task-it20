<template>
    <ul class="navbar-nav mr-auto">
        <li v-for="item in links" class="nav-item">
            <router-link :to="item.href" class="nav-link">{{item.title}}</router-link>

        </li>
    </ul>
</template>

<script>
    export default {
        name: "v-header",
        data() {
            return {
                links: [
                    {
                        title: 'логин-рег',
                        href: '/'
                    },
                    {
                        title: 'Главная',
                        href: '/index',
                    },
                    {
                        title: 'Редакт',
                        href: '/edit',
                    },
                    // {
                    //     title: 'Форма',
                    //     href: '/form',
                    // },
                    {
                        title: 'Результаты',
                        href: '/result',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
