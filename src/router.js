import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'all',
      component: () => import('_v/All.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('_v/Education.vue')
    },
    {
      path: '/age',
      name: 'age',
      component: () => import('_v/Age.vue')
    },
    {
      path: '/job',
      name: 'job',
      component: () => import('_v/Job.vue')
    },
    {
      path: '/sex',
      name: 'sex',
      component: () => import('_v/Sex.vue')
    },
    {
      path: '/completion ',
      name: 'completion ',
      component: () => import('_v/Completion.vue')
    }
  ]
})