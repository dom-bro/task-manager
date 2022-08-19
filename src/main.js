import 'normalize.css'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import axios from 'axios'
import moment from 'moment'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue')
    },
  ],
})

window.axios = axios
window.moment = moment


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')