import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  Register  from '../views/RegisterUser.vue'
import AccountUser from '../views/AccountUser.vue'
import AllPurchases from '../views/AllPurchases.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import teste from '../views/TesteGra.vue'
import AllUsers from '../views/AllUsers.vue'
import AllProducts from '../views/AllProducts.vue'

function checkAuthorization(to, from, next) {
  const token = localStorage.getItem('token')
  if (!token) {
    // redirecionar para a página de login se o token não estiver presente
    next({ name: 'home' })
  } else {
    const user = JSON.parse(atob(token.split('.')[1]))
    if (user.levelUser == 1) {
      next()
    } else {
      alert("VOCE NÃO É ADMIN")
      next({ name: 'home' })
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/settings',
    name: 'accountSettings',
    component: AccountUser
  },
  {
    path: '/allpurchases',
    name: 'allpurChases',
    component: AllPurchases
  },
  {
    path: '/cart',
    name: 'shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/test',
    name: 'teste',
    component: teste
  },
  {
    path: '/admin/allusers',
    name: 'allusers',
    component: AllUsers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/allproducts',
    name: 'allproducts',
    component: AllProducts,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    checkAuthorization(to, from, next)
  } else {
    next()
  }
})



export default router
