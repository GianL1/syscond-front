import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useAuth} from "@/stores/auth";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  },
  {
    path: '/bloco/index',
    name: 'bloco',
    component: () => import('../views/ListagemBlocosView.vue'),
    meta: { auth: true }
  },
  {
    path: '/blocos/create',
    name: 'blocosCreate',
    component: () => import('../views/BlocoFormView.vue'),
    meta: { auth: true }
  },
  {
    path: '/apartments/create/:id_bloco',
    name: 'apartmentsCreate',
    component: () => import('../views/CreateApartmentView.vue'),
    meta: { auth: true },
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to,from,next) => {

  if (to.meta?.auth) {
    const auth = useAuth()

    if (auth.token && auth.user) {

      const isAutenticated = await auth.checkToken();

      if (isAutenticated) {
        next();
      }
    }else {

      next({name: 'login'});
    }

  }else {
    next();
  }



})

export default router
