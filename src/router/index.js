import { createRouter, createWebHashHistory } from 'vue-router'
import appHome from './../views/HomeView.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: appHome,
    },
  ],
})

export default router
