import AppEmailBody from '@/components/AppEmailBody.vue'
import Dashboard from '@/views/Dashboard.vue'
import Forget from '@/views/Forget.vue'
import Login from '@/views/Login.vue'
// import Mail from '@/views/Mail.vue'
import NotFound from '@/views/NotFound.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history:
    createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      alias: '/'
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget,
      meta: {
        cantEnter: true
      }
    },
    {
      path: '/dashboard',
      name: 'home',
      component: Dashboard,
      beforeEnter() {
        console.log('beforeEnter')
      }
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('@/views/Mail.vue'), // Динамическая подгрузка через LasyLoading
      children: [
        {
          path: ':mailId?',
          component: AppEmailBody,
          props: true
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
      // redirect: '/login'
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach => to', to)
  console.log('beforeEach => from', from)
  if (to.meta.cantEnter === true) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  console.log('afterEach')
})

export default router
