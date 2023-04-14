import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/users/Login.vue'
import Register from '@/views/users/Register.vue'
import Index from '@/views/users/Index.vue'
import Medicinal from '@/views/petMedicinal/medicinal.vue'
import Food from '@/views/petFood/food.vue'
import DailyNecessities from '@/views/petDailyNecessities/dailyNecessities.vue'
import Pet from '@/views/pet/pet.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: 'pet',
          name: 'pet',
          component: Pet,
        },
        {
          path: 'dailyNecessities',
          name: 'dailyNecessities',
          component: DailyNecessities,
        },
        {
          path: 'food',
          name: 'food',
          component: Food,
        },
        {
          path: 'medicinal',
          name: 'medicinal',
          component: Medicinal
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
