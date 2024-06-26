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
  ],
});

export default router;
