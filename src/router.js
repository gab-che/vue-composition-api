import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Home.vue';
import NotesPage from './pages/Notes.vue';
import QuizzesPage from './pages/Quizzes.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/notes',
            name: 'quizzes',
            component: NotesPage,
        },
        {
            path: '/quizzes',
            name: 'quizzes',
            component: QuizzesPage,
        }
    ]
});

export { router };