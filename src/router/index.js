import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/content/users/login.vue'
import Enroll from '@/content/users/enroll.vue'
import Index from '@/content/users/index.vue'
import Medicinal from '@/content/petMedicinal/medicinal.vue'
import Food from '@/content/petFood/food.vue'
import DailyNecessities from '@/content/petDailyNecessities/dailyNecessities.vue'
import Pet from '@/content/pet/pet.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/index',
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
      path: '/enroll',
      name: 'enroll',
      component: Enroll
    }
  ]
})

export default router
