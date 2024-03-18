import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import Memorizing from '../pages/Memorizing.vue'
import Excluding from '../pages/Excluding.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '主页',
      }
    },
    {
      path: '/words/memorizing',
      component: Memorizing,
      meta: {
        title: '记单词'
      }
    },
    {
      path: '/words/excluding',
      component: Excluding,
      meta: {
        title: '排单词'
      }
    }
  ]
})

export default router