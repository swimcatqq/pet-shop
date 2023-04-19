import { createRouter, createWebHistory } from 'vue-router'
//用户 首页，登录，注册
import Login from '@/views/users/Login.vue'
import Register from '@/views/users/Register.vue'
import Index from '@/views/users/Index.vue'
//个人中心
import Center from '@/views/users/Center.vue'
import Medicinal from '@/views/petMedicinal/medicinal.vue'
//宠物零食
import Food from '@/views/petFood/food.vue'
//宠物用品（玩具+其他）
import Other from '@/views/petDailyNecessities/Other.vue'
import Toy from '@/views/petDailyNecessities/Toy.vue'
//宠物分类
import Pet from '@/views/pet/pet.vue'  //默认展示的宠物详情列表
import Cat from '@/views/pet/Cat.vue'
import Dog from '@/views/pet/Dog.vue'
import Fly from '@/views/pet/Fly.vue'
import Swim from '@/views/pet/Swim.vue'
import StrangePet from '@/views/pet/StrangePet.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/pet',
      children:[
        {
          path: 'pet',
          name: 'pet',
          component: Pet,
          //别名，用户访问/pet时，url显示为/，但其实显示的还是pet页面
          alias:'/' 
        },
        { //宠物用品中的其他
          path: 'other',
          name: 'other',
          component: Other,
        },
        { //宠物用品中的玩具
          path: 'toy',
          name: 'toy',
          component: Toy,
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
        },
        {
          path: 'cat',
          name: 'cat',
          component: Cat
        },
        {
          path: 'dog',
          name: 'dog',
          component: Dog
        },
        {
          path: 'fly',
          name: 'fly',
          component: Fly
        },
        {
          path: 'swim',
          name: 'swim',
          component: Swim
        },
        {
          path: 'strangepet',
          name: 'strangepet',
          component: StrangePet 
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
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    }
  ]
})

export default router
