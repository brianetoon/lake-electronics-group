import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Reviews from '@/components/Reviews'
import ServiceArea from '@/components/ServiceArea'
import Contact from '@/components/Contact'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/:product_slug',
      name: 'Product',
      component: Product
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
