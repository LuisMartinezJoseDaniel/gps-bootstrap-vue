import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import ProjectsLayout from '@/modules/projects/layouts/ProjectsLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'projects' },
      component: ProjectsLayout,
      children: [
        {
          path: '/transactions/apigee',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/modules/projects/views/UsersView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/views/LoginView.vue'),
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('@/modules/auth/views/ForgotPasswordView.vue'),
        },
      ],
    },
  ],
});

export default router;
