import { createRouter, createWebHistory } from 'vue-router'

import Contents from "../page/contents/index.vue"
import Home from "../page/home/index.vue"
import Myinformation from "../page/myinformation/index.vue"
import Share from "../page/share/index.vue"
import Invitation from "../page/invitation/index.vue"
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'




 const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
  
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
  },
  {
    path: '/invitation',
    component: () => import('../page/invitation/index.vue'),
  },
  {
    path:"/music",
    component:()=>import("../page/music/index.vue"),
  
    
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;