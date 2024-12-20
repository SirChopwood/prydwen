import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {header: true},
      beforeEnter(to, from) {
        let path = sessionStorage.getItem('path');
        let hash = sessionStorage.getItem('hash');
        console.log("Loading Path: ", path, " -> ", hash)
        if(path) {
          sessionStorage.removeItem('path');
          return { path: path, replace: true}
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue'),
      meta: {header: true}
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {header: true},
      children: [
        {
          path: 'agm',
          name: 'agm',
          component: () => import('../views/projects/agm.vue')
        },
        {
          path: 'mos',
          name: 'mos',
          component: () => import('../views/projects/mos.vue')
        },
        {
          path: 'sas',
          name: 'sas',
          component: () => import('../views/projects/sas.vue')
        },
        {
          path: 'dvz',
          name: 'dvz',
          component: () => import('../views/projects/dvz.vue')
        },
        {
          path: '/rrm',
          name: 'rrm',
          meta: {header: false},
          children: [
            {
              path: '',
              name: 'rrm_auth',
              component: () => import('../views/rrm/auth.vue')
            },
            {
              path: 'panel',
              name: 'rrm_panel',
              component: () => import('../views/rrm/panel.vue')
            },
            {
              path: 'overlay',
              name: 'rrm_overlay',
              component: () => import('../views/rrm/overlay.vue')
            }
          ]
        },
      ]
    },
    {
      path: '/totless',
      name: 'totless',
      meta: {header: false},
      children: [
        {
          path: 'santaletters',
          name: 'santaletters',
          component: () => import('../views/totless/santaletters.vue')
        },
        {
          path: 'factionscores',
          name: 'factionscores',
          component: () => import('../views/totless/factionscores.vue')
        },
        {
          path: 'factionscoresfireside',
          name: 'factionscoresfireside',
          component: () => import('../views/totless/factionscoresfireside.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      beforeEnter() {location.href = "/404"},
      component: { template: '<div>404</div>'},
      meta: {header: true}
    }
  ]
})
// router.beforeEach((to, from) => {
// })
export default router
