import home from './components/search.components.vue';
import result from './components/result.components.vue'

/* Rotas */
export const routes = [
    {path: '', component: home},
    {path: '/weather', component:result}
];