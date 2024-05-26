<template>
    <div>
        <div class="nav-top" >
          
         <div class="cntern">

         <div >
            <Search style="width: 20px; height: 30px; margin-left: 8px; color:#FFFFFF; " />
          <div class="sach"> 请输入关键词</div>
        </div>
        
         <div >
             
         <el-icon size="25" :class="LubBool?'':'re-d' "  @click="setLubBool" color="#FFFFFF" style="margin-right: 10px; cursor: pointer; transition: all 0.5s;"><ArrowUp /></el-icon>


         <el-icon size="25" color="#FFFFFF"><UserFilled /></el-icon> 
         </div>
    
       
          </div>
      
            
        </div>
        <div class="nav-lbt" :class="LubBool?'he-a':'he-b'">


            <div class="nav-but-top" ></div>
            <div class="nav-but-but"></div>
         
                <van-swipe  class='rbt '  :autoplay="6000" indicator-color="white">
                <van-swipe-item class="item"  v-for="(i,index) in  data" :key="index"> <img class="rbt" :src="i" alt=""></van-swipe-item>
             
                
                </van-swipe>



         
 
            <!-- <img class="rbt" src="https://img2.baidu.com/it/u=2164023972,3595561959&fm=253&fmt=auto&app=138&f=JPEG?w=705&h=500" alt=""> -->
        </div>
    </div>
</template>

<script setup >

import { onMounted, ref,inject } from 'vue'



  
const LubBool=ref(false);

const myMethod = inject('setheight');

// 使用父组件提供的方法实例

const setLubBool=()=>{
    LubBool.value=!LubBool.value;

    if(LubBool.value)
    {
        myMethod(415)
        console.log("执行");
    }
    else
    {
        myMethod(-15)
    }
 
 
}

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps

// 轮播图数据
const data =ref([])
class MyMethod
{

  

    constructor(){
        this.axois()
     
    }
    async axois(){

// 
       
        
        let arr=(await $r.get("/home/list?id=1")).imgarr.split(",")
        // console.log(arr);
      
        for(let i =0;i<arr.length;i++)
        {
            console.log(arr[i]);

            arr[i]=await $r.img(arr[i])
        }
     

        data.value=arr

       
    }
}


onMounted(()=>{
   
 

    new MyMethod();
})




</script>

<style scoped>
.swiper{
    
}
.cntern{
    display: flex;
    align-items: center;
    width: 70%;
    margin: auto;
    justify-content: space-between;
    height: 100%;
}
.cntern>div{
    height: 100%;
   
    display: flex;
    align-items: center;
  
}
.sach{
    color: black;
    font-size: 14px;
    display: flex;
    justify-content: start;
    padding-left: 10px;
    align-items: center;
    background: #FFFFFF;
    width: 200px;
    height: 60%;
    margin-left: 10px;
}
.nav-top{

   
    background: #202328;
    min-width: 100%;
    height: 45px;
}
.nav-but-top{
    background: #202328;
    flex: 1 ;
}
.nav-but-but{
    background: #F0F0F0;
    flex: 1 ;
}
.nav-lbt{
    overflow: hidden;
    position: relative;
   
    flex-direction: column;
    display: flex;
    transition: all 0.3s;
}
.he-a{
    height: 450px;
}
.he-b{
    height: 0px;
}

.rbt{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 70%;
    height: 450px;

}
.rbt img{
    width: 100%;
    height: 100%;
}
.box{

    
}
.item{
    width: 100%;
    height: 100%;
   
}
.re-d {
  transform: rotate(180deg);
}
</style>