import Home from './components/Home.vue';
import About from './components/About.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    }
]
