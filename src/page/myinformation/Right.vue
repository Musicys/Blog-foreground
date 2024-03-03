<template>
    <div class="box">

        <div class="box-but">
  
  <span class="box-bt">{{useStore().state.user.userdata.bkName}}</span>
  <div class="xx">
      <img :src="user.userTx" alt="">
      <span>{{useStore().state.user.userdata.usernames}}</span>
  </div>
  <div class="grid">
   <Aurl></Aurl>
  </div>
  
</div>
     <div class="box-top">
     
        <img class="box-img" :src="user.userFlimg" alt="">
        <span class="box-bt">博客分类</span>
        <ol >
        <li style="    border-top: 1px solid rgba(0, 0, 0, .3);"><span>99</span><span>99</span></li>
        <li ><span>java</span><span>44</span></li>
        <li><span>c++</span><span>55</span></li>
        <li><span>js、Python</span><span>99</span></li>
        <li><span>javasciprt</span><span>99</span></li>
        
        </ol>
    

     </div>


     <div class="box-center">
     
     <img class="box-img" :src="user.userFlimg"  alt="">
     <span class="box-bt">最新动态</span>


     <ol>
     <li  style="    border-top: 1px solid rgba(0, 0, 0, .3);"><img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wkyv5_jbDUpoNjrI8Nm1SwHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""><span>99</span></li>
     <li><img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wkyv5_jbDUpoNjrI8Nm1SwHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""><span>提升品牌形象并满足业务需求</span></li>
     <li><img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wkyv5_jbDUpoNjrI8Nm1SwHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""><span>提升品牌形象并满足业务需求</span></li>
   
     </ol>
 

  </div>

    </div>
</template>

<script setup>
import Aurl from "../../components/Aurl/Aurl.vue"

import {useStore} from "vuex"
import {ref} from "vue"

const user=ref({
    userTx:"",
    userFlimg:""
})

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps


$r.img(useStore().state.user.userdata.userImg).then(res=>{
    user.value.userTx = res
})

$r.img(useStore().state.user.userdata.userLimg).then(res=>{
    user.value.userFlimg = res
})



</script>

<style scoped>

.box{

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

}
.box-top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

}
.box-top img{
    margin-top: 8px;
    width: 95%;
    height: 180px;
}
.box-bt{
    margin-top: 1.2em;
    font-size: 18px;
    line-height: 30px;
}
.box-top>ol{
    width: 95%;

    margin-bottom: 10px;
}
.box-top li{
    padding: 0 10px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
}
.box-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;



}
.box-center ol{
    width: 95%;
  
margin-bottom: 10px;
}
.box-center li{
    padding: 5px 8px;
    
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    /* padding: 0 20px; */
 
    display: flex;
    justify-content: start;
    align-items: center;
    height: 95px;
}
.box-center li>span{

   flex: 1;
   height: 80px;
   margin-left: 1em;
   line-height: 24px;
   font-size: 12px;
   color: rgba(0, 0, 0, .8);

  
}
.box-center li>img{
    max-width: 130px;
    height: 80px;
   
  

}
.box-img{
    width: 95%;
}
.box-but{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.xx>img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.xx{
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
}
.grid{
    width: 100%;
    height: 70px;
    

}

</style>