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
import AdminView from '@/views/AdminView.vue'
import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/views/LoginView.vue'

// import NavComp from '@/views/NavComp.vue'

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
  },
  {
    path: '/flights/:id',
    name: 'flight',
    component: SingleAssetComp,
    // children: [
    //   {
    //     path: ':id',
    //     name: 'flight',
    //     component: SingleAssetView
    //   }
    // ]
  },
  {
    path: '/hotels/:hotelID',
    name: 'hotel',
    component: SingleAssetComp,
    // children: [
    //   {
    //     path: ':id',
    //     name: 'flight',
    //     component: SingleAssetView
    //   }
    // ]
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView,
  },
  {
    path: '/cars/:cardID',
    name: 'car',
    component: SingleAssetComp,
    // children: [
    //   {
    //     path: ':id',
    //     name: 'car',
    //     component: SingleAssetView
    //   }
    // ]
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
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
