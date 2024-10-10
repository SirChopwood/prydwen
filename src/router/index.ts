import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory("/"),
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
      path: '/projects/mos',
      name: 'mos',
      component: () => import('../views/projects/mos.vue')
    },
    {
      path: '/projects/sas',
      name: 'sas',
      component: () => import('../views/projects/sas.vue')
    },
    {
      path: '/projects/dvz',
      name: 'dvz',
      component: () => import('../views/projects/dvz.vue')
    },
    {
      path: '/rrm',
      name: 'rrm_auth',
      component: () => import('../views/rrm/auth.vue')
    },
    {
      path: '/rrm/panel',
      name: 'rrm_panel',
      component: () => import('../views/rrm/panel.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: HomeView
    }
  ]
})

export default router
