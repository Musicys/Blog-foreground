<template>
   <div class="home">
    <div class="login">
      <div class="item" v-for="(item, index) in 12" :key="index">
         <Cart></Cart>
       
      </div>
   </div>
   </div>
</template>

<script setup>
import {ref} from "vue"
import Cart from "./Cart.vue"
const tabList=ref(
    [
        {picUrl:"https://img2.baidu.com/it/u=1647907223,2191495685&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"},
      
    ]
)


</script>

<style scoped>
.home
{
    width: 70%;
    margin: auto;
    min-width: 1284px;
max-width: 1980px;
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
    
  
}

</style>