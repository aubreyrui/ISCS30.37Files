import { createRouter, createWebHistory } from 'vue-router'
import PostView from '@/views/PostView.vue'
import PostListView from '@/views/PostListView.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostListView
    }

  ]
})

export default router