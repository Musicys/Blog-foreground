import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// 引入resolve

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
       '/api':{
           target:"http://localhost:8087/", //跨域地址
           changeOrigin:true, //支持跨域
           rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
       }
    }
 },
 resolve: {
   // 设置路径别名
   alias: {
     '@': resolve(__dirname, './src'),
     '*': resolve('')
   },
 }



})
