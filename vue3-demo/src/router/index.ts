import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/loginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '/home/user',
          name: 'user',
          component: () => import('../views/user/userContent.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})

export default router
