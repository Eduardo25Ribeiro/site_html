import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import MarcasView from '../views/MarcasView.vue';
import ComparativoView from '../views/ComparativoView.vue';
import OpinioesView from '../views/OpinioesView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: InicioView },
    { path: '/marcas', component: MarcasView },
    { path: '/comparativo', component: ComparativoView },
    { path: '/opinioes', component: OpinioesView },
    { path: '/login', component: LoginView },
  ],
});

export default router;
