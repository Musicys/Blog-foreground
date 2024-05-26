<template>
   <div class="home"   v-if="isindexhome">
    <div class="login" v-if="DataNull">



      <div class="item" v-for="(item, index) in data.data" :key="index">
         <Cart :sethome="sethome" :data="item"></Cart>
      </div>
  
 

     
   </div>



  

  

   <!-- <Nullinformation :childData="123" v-else></Nullinformation> -->
   <div class="page">
   <el-pagination layout="prev, pager, next" 
   
   v-model:current-page="data.page"
      v-model:page-size="data.pageSize"
     
      :small="small"
   
      :total="data.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
   
  />
  </div>
   </div>

   
</template>

<script setup>
import Nullinformation from "../../components/nullinformation/Nullinformation.vue"





import {ref,onMounted,inject,watch} from "vue"
import Cart from "./Cart.vue"
const tabList=ref(
    [
        {picUrl:"https://img2.baidu.com/it/u=1647907223,2191495685&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"},
      
    ]
)
const DataNull=ref(true)


const pageSize4 = ref(3)
const small = ref(true)
// 首页数据
const data=ref({

})

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps


class User{
   Maxlenght=99//最多缓存99条
   page=1//当前页
   total=0//总数
   pageSize=8///每页数据
   data=[]
   constructor(data){
      this.getdata()
   }
    getdata(){
      
      $r.get(`/desc/wz/lists?page=${this.page}&pageSize=${this.pageSize}`).then(res=>{
        
         this.total=res.data.total
         this.data=res.data.records
        
         this.setdata()
      })
   }
   setdata(obj){
  
      data.value={
        page:this.page,
        pageSize:this.pageSize,
        data:this.data,
        total:this.total
         
      }
      console.log("yem==>",data.value);
   }
   xyy(id){
   
      this.page=id;
      this.getdata()

   } 
   
   
   



}

let user=new User();
const handleSizeChange = (val) => {
 
   console.log("zhix=>1",val);
  
   
}
const handleCurrentChange = (val) => {
   user.xyy(val)
//  x
  console.log("zhix=21",val);
}


const isindexhome=ref(true)
const sethome=(Boolean)=>
{
   isindexhome.value=Boolean
}

import { onBeforeRouteUpdate,useRoute } from 'vue-router';
const route = useRoute();
const key = ref(route.fullPath);

// 监听路由变化，更新key
watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    key.value = newVal;
    console.log("执行");
  }
);
// 在setup函数中监听路由变化
onBeforeRouteUpdate((to, from, next) => {
  // 执行你的逻辑
  console.log('路由从', from.href, '到', to.href);
  if(to.href=="/")
  {
   console.log("执行s");
   sethome(true)
  }

  next();
});

onMounted(()=>{
   
})


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.page{
   width: 100%;
   display: flex;
   justify-content: center;
   padding:10px 20px;
   align-items: center;
   height: 20px;
  
}
.home
{
    width: 70%;
    margin: auto;
    min-width: 899px;
    min-height: 90vh;
max-width: 1980px;


}
.login {
   width: 100%;
   min-height: 90vh;
   display:grid;

 gap: 5px;
 grid-template-columns:repeat(4,1fr);
}
 
.item {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   max-height:372px;
   
   margin-bottom: 1em;
   
}

.item div{
    
  
}

</style>