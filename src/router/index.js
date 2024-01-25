import { createRouter, createWebHistory } from 'vue-router'

import Contents from "../page/contents/index.vue"
import Home from "../page/home/index.vue"
import Myinformation from "../page/myinformation/index.vue"
import Share from "../page/share/index.vue"





 const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents
  },
  {
    path: '/share',
    name: 'Share',
    component: Share
  },
  
  {
    path: '/myinformation',
    name: 'Myinformation',
    component: Myinformation
  }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;