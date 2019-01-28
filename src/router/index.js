import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import ServiceArea from '@/components/ServiceArea'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/service-area',
      name: 'ServiceArea',
      component: ServiceArea
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
