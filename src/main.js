import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import router from './router'
import 'vant/lib/index.css'; // 引入 Vant 的样式

import { Swipe, SwipeItem } from 'vant'; // 导入 Vant 的 Swipe 和 SwipeItem 组件



import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const  app= createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  app.use(Swipe);
  app.use(SwipeItem);

app.use(router)
app.use(ElementPlus)
app.mount('#app')