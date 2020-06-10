import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('../views/Home')
const Films = ()=> import('../views/Home/children/films.vue')
const Cimemas = ()=> import('../views/Home/children/cinemas.vue')
const Brand = ()=>import('../views/Home/children/brand.vue')
const Center = ()=>import('../views/Home/children/center.vue')
  const routes = [
    {
      path:'/',
      component: Home,
      children:[
        {
          path: 'films',
          component: Films
        },
        {
          path:'cinemas',
          component: Cimemas
        },
        {
          path:'brand',
          component: Brand
        },
        {
          path: 'center',
          component:Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/film/:filmId',
      component: ()=>import('../views/Film/index.vue')
    },
    {
      path: '/city',
      component: ()=>import('../views/City/index.vue')
    },
    {
      path:'/money',
      component: ()=>import('../views/Money/index.vue')
    },
    {
      path:'/login',
      component: ()=>import('../views/Login/index.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
