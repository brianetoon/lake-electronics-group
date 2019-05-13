import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Reviews from '@/components/Reviews'
import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import SubmitReview from '@/components/SubmitReview'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/submit-review',
      name: 'SubmitReview',
      component: SubmitReview
    }
  ]
})
