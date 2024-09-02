/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelsView from '@/views/HotelsView.vue'
import FlightsView from '../views/FlightsView.vue'
import CarsView from '@/views/CarsView.vue'
import CheckOutView from '../views/CheckOutView.vue'
import ReviewView from '../views/ReviewView.vue'
import ContactView from '@/views/ContactView.vue'
// import SingleAssetComp from '@/components/SingleAssetComp.vue'
import SingleAssetView from '@/views/SingleAssetView.vue'
import SingleAssetComp from '@/components/SingleAssetComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: SingleAssetView
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: HotelsView,
    // children: [
    //   {
    //     path: ':id',
    //     name: 'hotel',
    //     component: SingleAssetView
    //   }
    // ]
  },{
    path:'/hotels/:id',
    name:'hotel',
    component:SingleAssetComp
  },
  {
    path: '/flights',
    name: 'flights',
    component: FlightsView,
    children: [
      {
        path: ':id',
        name: 'flight',
        component: SingleAssetView
      }
    ]
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView,
    children: [
      {
        path: ':id',
        name: 'car',
        component: SingleAssetView
      }
    ]
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
