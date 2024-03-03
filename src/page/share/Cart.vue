<template>
   <div class="cart">
    
    <img class="img" :src="usedata.url" alt="">

 <div class="bt">
     <div class=""><img  src="../../static/dzan.png" alt="">{{ data.sareGood
 }}</div>
     <div class=""> <img src="../../static/pinr.png" alt="">{{ data.sareDown
 }}</div>
     <div class=""><img src="../../static/gk.png" alt="">{{ data.sareGc }}</div>
 </div>
</div>
</template>

<script setup>
 import { defineProps,onMounted,ref } from 'vue';

const props = defineProps({
  data: {
    type: String,
    required: true
  }
});
import {getCurrentInstance} from "vue"

const usedata=ref({
    url:"https://img2.baidu.com/it/u=1018869899,3899411690&fm=253&fmt=auto&app=138&f=JPEG?w=269&h=500"
})
let $r=getCurrentInstance().appContext.config.globalProperties.$htps

onMounted(() => {

  
    $r.img(props.data.sareUrl).then(res=>{
        usedata.value.url=res
    })


})

</script>

<style  scoped>
 .img{
    width: 100%;
    height: 350px;

}
 .bt{
    
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(0,0,0,0.4);
    align-items: center;
    padding-top: .5rem;
 
    margin-bottom:15px;

}
.bt div>img{
 width: 25px;
 height: 25px;
 margin-right: 5px;

}
.bt div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
   
    font-size: 17px;
    color: rgba(0, 0, 0, .3);
}
.nr{
    width: 85%;
    color: black;
    font-size: 16px;
    text-align: justify;
    margin-bottom: 20px;
    perspective: 1000px; 
}
.cart{
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

   background: #FFFFFF;
    position: relative;
   
    box-shadow: -1px 1px 0 0 rgba(0, 0, 0, .1);
}
.cart div{

}
.logos{

    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);

}
.font-s{
    font-size: 18px;
    color: #ABABAB;
    margin-top: .3em;
    font-weight: bold;
}
.font-t{
    font-size: 24px;
    color: black;
}
.font-a{
    font-size: 18px;
    color: black;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 20px;
    border-left:1px solid rgba(0, 0, 0, .3);
    border-right:1px solid rgba(0, 0, 0, .3);
}

</style>



