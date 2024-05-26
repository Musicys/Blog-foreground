<template>
    <div class="box">


        <div class="nr">
        
      
<span v-for="i in data" :key="i">{{ i.nr }}</span>


        
        
        </div>
          <div class="cent"><input type="text"  v-model="input" placeholder="我也说一句...."></div>
        <div class="but">
            
            <div >
            
                <span>留言（{{ nber}}）</span>
            <button>全部</button>
            </div>
            <div class="">
                <button @click="setinput">发送</button>
            
            </div>
        
        
        </div>


    </div>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from "vue"

import {addliuy,liunber,getliuyian} from "../../htpps/indexs"
import { ElMessage } from 'element-plus'
const input =ref("")
const data=ref([])
const nber=ref(0)

const setdata=async ()=>{

  data.value= await getliuyian()


  console.log("data=>",data.value);
}
const setinput=()=>{

    if(input.value=="")
    {
        ElMessage({
    message: '还没输入评论呢',
    type: 'warning',
  })
        return
    }
     addliuy(input.value).then(res=>{
      
         ElMessage({
                message: '感谢评论',
                type: 'success',
                plain: true,
            })
            setnber()


     })
     input.value=""
}
const setnber=async ()=>{
   nber.value= await liunber()
}

let time=0

onMounted(()=>{
    setdata()
    time=setInterval(() => {
        setdata()
    }, 5000);
    setnber()
})


onBeforeUnmount(()=>{
    console.log("执行==?>",time)
    clearInterval(time)
})


</script>

<style scoped>

.but button{
    border: none;
    background: #F8DFDF;
    padding: 5px;
    width: 100px;
    font-weight: 17px;
}
.but{
    width: 100%;

 display: flex;
 justify-content: space-between;
 margin-top: 2em;
}
.but span{
    font-size: 16px;
}
.cent{
    margin-top: 1em;


width: 100%;
}
.cent>input{
    float: right;
    user-select: none;

    padding: 10px;
    width: 300px;
    border: none;
    background: #EFEFEF;
}

.box{
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
   
}
.nr{
    padding-top: 1em;
    width: 70%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}
.nr>span{
 
    white-space: nowrap;
    padding: 1em 0;
   
    
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    
}
</style>