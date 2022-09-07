import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/shuttlebox',
      name: 'Shuttle box',
      component: () => import('../views/shuttleBox.vue')
    },
    {
      path: '/componentsList',
      name: 'componentsList',
      component: () => import('../views/conponsitionList.vue')
    }
  ]
})

export default router
