<template>
   <div class="home">
    <div class="login">
      <div class="item" v-for="(item, index) in tabList" :key="index">
         <div>{{index}}</div>
      </div>
   </div>
   </div>
</template>

<script setup>
import {ref} from "vue"
const tabList=ref(
    [
        {picUrl:"https://img2.baidu.com/it/u=1647907223,2191495685&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"},
      
    ]
)
for(let i=0; i<1; i++)
{
    tabList.value.push(
       
    {picUrl:"https://img2.baidu.com/it/u=3215730428,3406193656&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"},
      )

      tabList.value.push(
       
       {picUrl:"https://img2.baidu.com/it/u=1647907223,2191495685&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"},
         )

         tabList.value.push(
       
       {picUrl:"https://img2.baidu.com/it/u=3215730428,3406193656&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"},
         )
   
         
}

</script>

<style scoped>
.home
{
    width: 70%;
    margin: auto;
}
.login {
   margin: 10px;
   column-count: 4;
   column-gap: 10px;
}
 
.item {
   margin-bottom: 10px;
}
 
.item div{
    width: 100%;
   height: 100%;
   background: red;
}
.item img {
   width: 100%;
   height: 100%;
}
</style>