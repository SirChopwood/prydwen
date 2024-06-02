import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue')
    },
    {
      path: '/projects/agm',
      name: 'agm',
      component: () => import('../views/projects/agm.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: HomeView
    }
  ]
})

export default router
