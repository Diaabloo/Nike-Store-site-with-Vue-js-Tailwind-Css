import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailsView.vue'
import ContactView from '../views/ContactView.vue'
import Login from '../components/loginSignupForm/LoginSec.vue';
import Signup from '../components/loginSignupForm/SignUp.vue';

const routes = [
  //Home route
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //About route
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  },
  //Product route
  {
    path: '/products',
    name: 'product',
    component: ProductView
  },
    //Product Detail route
    {
      path: '/products-details/:id',
      name: 'product-details',
      component: ProductDetailView
    },
  //Contact route
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactView
  },
  //Login route
  {
    path: '/Login',
    name:'login',
    component: Login
  },
  // Signup  route
  {
    path: '/Signup',
    name:'signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
