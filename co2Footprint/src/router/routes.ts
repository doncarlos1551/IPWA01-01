import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HauptLayout.vue'),
    children: [{ path: '', component: () => import('pages/StartSeite.vue') }],
  },
  {
    path: '/emission',
    component: () => import('layouts/HauptLayout.vue'),
    children: [{ path: '', component: () => import('pages/EmissionsdatenSeite.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNichtGefunden.vue'),
  },
];

export default routes;
