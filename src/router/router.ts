import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import Memorizing from '../pages/Memorizing.vue'
import Excluding from '../pages/Excluding.vue'
import TestSpell from '../pages/TestSpell.vue'
import TestTranslate from '../pages/TestTranslate.vue';
import Login from '../pages/Login.vue'

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
      path: '/login',
      component: Login,
      meta: {
        title: '登录',
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
    },
    {
      path: '/words/test/spell',
      component: TestSpell,
      meta: {
        title: '测试拼写'
      }
    },
    {
      path: '/words/test/translate',
      component: TestTranslate,
      meta: {
        title: '测试翻译'
      }
    }
  ]
})

export default router
