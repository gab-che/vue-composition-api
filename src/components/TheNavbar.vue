<script setup>
    import { ref } from 'vue';
    const navLinks = ref(['home', 'notes', 'quizzes']);
</script>

<template>
    <nav>
        <div class="container-fluid d-flex justify-content-center gap-3">
            <router-link :to="{ name: link }" v-for="link, i in navLinks">
                {{ link.toUpperCase() }}
            </router-link>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    @use '../style/general.scss';
    @use '../style/partials/variables' as *;

    nav {
    padding: 30px;
    }
    nav a {
    font-weight: bold;
    }
</style>