import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Test from '@/views/Test.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/tests', component: Test }
    ]
})