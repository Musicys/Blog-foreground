<template>
   <div class="home">
    <div class="login" v-if="DataNull">
      <div class="item" v-for="(item, index) in 10" :key="index">
         <Cart></Cart>
       
      </div>
     
   </div>
   <Nullinformation :childData="123" v-else></Nullinformation>
   </div>
</template>

<script setup>
import Nullinformation from "../../components/nullinformation/Nullinformation.vue"
import {ref} from "vue"
import Cart from "./Cart.vue"
const tabList=ref(
    [
        {picUrl:"https://img2.baidu.com/it/u=1647907223,2191495685&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"},
      
    ]
)
const DataNull=ref(true)

</script>

<style scoped>
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
   height: 100%;
   display:grid;
 gap: 5px;
 grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
 
.item {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   margin-bottom: 1em;
}

.item div{
    
  
}

</style>