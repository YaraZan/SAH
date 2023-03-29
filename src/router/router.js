import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';
import Question from '@/views/Question.vue';
import Recommendations from '@/views/Recommendations.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/tests', component: Test },
        { path: '/question', component: Question },
        { path: '/recommendations', component: Recommendations}
    ]
})