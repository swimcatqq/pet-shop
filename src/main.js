import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
//用户登录状态
const isLoggedIn = ref(false)
app.provide('isLoggedIn', isLoggedIn)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
