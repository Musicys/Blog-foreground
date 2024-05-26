<template>
    <div class="aritcle">
        <div class="bt">
            {{props.descdata.descdata.descBt}}
        
        
        </div>
        <div class="time">
        <span>发表时间：</span>
        <span>{{ time}}</span>
        </div>

        <div class="bq">
        <span>标签：</span>
            <div class="bq_xx">
            {{props.descdata.descdata.biaoname}}
            </div>
            
           
        </div>

        <div class="nr">
            <img :src="props.descdata.descdata.url" alt="">
          
            {{  props.descdata.descdata.descWz}}
        
            <p>
      
</p>


    
        </div>
 <div class="nr-but" >
    <div class=""  @click="goods"><img src="../../static/inc_dz.png" alt=""><span>{{ props.descdata.descdata.descGood+ Goods}}</span></div>
    <div class=""><img src="../../static/inc_pr.png" alt=""><span>{{ prnbers}}</span></div>
</div>
        <div class="pr">
        
           
        <Pr :data="props"></Pr> 

      
        </div>

    </div>
</template>

<script setup>
import { defineProps,onMounted,ref,getCurrentInstance, watch ,computed} from 'vue';
import Pr from "./Pr.vue"
import { ElNotification } from 'element-plus'
import {  onBeforeRouteUpdate,useRoute} from 'vue-router';
const route=useRoute()
import  {good,prnber} from "../../htpps/indexs.js"
// *****************************************点赞
const Goods=ref(0)
const prnbers=ref(0)
const setbr=async (id)=>
{
    console.log("1111111111111111");
    prnbers.value= await prnber(id)

}
const goods=()=>{
  
   good(props.descdata.descdata.id).then(res=>{
    console.log(res);
    Goods.value+=1
    ElNotification.success({
    title: '点赞成功',
 
    offset: 100,
  })

    
   })
}

// 在setup函数中监听路由变化
onBeforeRouteUpdate((to, from, next) => {
  // 执行你的逻辑
  console.log('路由从', from.href, '到', to.query.id);
  Goods.value=0
  console.log("===执行====================>");
   setbr(to.query.id)

  next();
});
// *****************************************


// *********************************************父组件信息
let $r=getCurrentInstance().appContext.config.globalProperties.$htps
const time= computed(()=>{
            let dateString =   props.descdata.descdata.createTime 
            let date = new Date(dateString);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
       

        })
// :descdata="descdata" :listdata="listdata"
const props = defineProps({
    descdata: {
    type:Object,
    required: true
  },
  list:{
    typeof:Object,
    required: true
  }
 
});


// *********************************************

onMounted(()=>{
  
    setbr(route.query.id)
   
    
})

</script>

<style scoped>
p{
    text-indent: 2em; /* 2em为首行缩进的大小 */
}
.pr_but{
    margin-top: 3em;
    text-align: center;
    color: rgba(0, 0, 0, .3);
    
}
.nr-but{
    display: flex;
    justify-content: end;
    width: 90%;
    align-items: center;
  
  position: absolute;
    bottom: 92vh;
   
}
.nr-but>div{
  
    display: flex;
    justify-content: center;
    align-items: center;
}
.nr-but img{
    width: 25px ;
    
    height: 25px;
}
.nr-but span{
    margin:1em ;
    font-size: 13px;
}
.pr{
    width: 100%;
    min-height: 100px;

}

.nr img{
width: 100%;
margin:10px ;
}
.nr {
    font-size: 1em;
    line-height: 36px;

    text-align: justify;

}
.aritcle{
   padding: 1em 1.5em;
    
}
.bt{
    line-height: 50px;
    width: 100%;
    font-weight: 450;
    
    font-weight: 28px;
  
}
.time{
    line-height: 20px;
    font-size: 12px;

}
.bq{
    display: flex;
   
    justify-content: start;
    line-height: 25px;
    font-size: 12px;
    align-items: center;
}
.bq>div{
    margin-right: 5px;
    height: 16px;
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 12px;
    line-height: 16px;
    background: #F0F0F0;
}
</style>