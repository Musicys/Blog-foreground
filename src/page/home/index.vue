<template>
   <div class="home">
    <div class="login" v-if="DataNull">



      <div class="item" v-for="(item, index) in data.data" :key="index">
         <Cart :data="item"></Cart>
      </div>
  
 

     
   </div>
   
   <Nullinformation :childData="123" v-else></Nullinformation>
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
import {ref,onMounted,inject} from "vue"
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
        
         this.total=Math.ceil(res.count/this.pageSize)
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
      console.log(data.value);
   }
   
   

}
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

onMounted(()=>{
   new User();
})


</script>

<style scoped>
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