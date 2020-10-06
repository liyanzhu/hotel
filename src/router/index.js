import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/index',
    name: 'index',
    component: () => import ('@/views/index/index.vue')
  },{
    path: '/province',
    name: 'province',
    component: () => import ('@/views/index/Province.vue')
  },{
    path: '/calendar',
    name: 'calendar',
    component: () => import ('@/views/calendar/Calendar.vue')
  },{
    path: '/tabbar',
    name: 'tabbar',
    component: () => import ('@/components/tabbar/tabbar.vue')
  },{
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/index/Detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
