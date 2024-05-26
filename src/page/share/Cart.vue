<template>
   <div class="cart" @click="gomusic(usedata)">
    
    <div class="top">
       <div class="zz" :style="`background-image: url(${usedata.url}) ;`"></div>
       
    </div>

 <div class="bt">
     <div class=""><img  src="../../static/dzan.png" alt="">{{ data.sareGood
 }}</div>
     <div class=""> <img src="../../static/pinr.png" alt="">{{ prs
 }}</div>
     <div class=""><img src="../../static/gk.png" alt="">{{ data.sareGc }}</div>
     <div class=""><img src="../../static/dow.png" alt="">{{ data.sareDown }}</div>
 </div>
</div>
</template>

<script setup>
 import { defineProps,onMounted,ref } from 'vue';
import {musicpladdnber} from "../../htpps/indexs"


import {useRouter} from "vue-router"

const prs=ref(0)

const setprs=async ()=>{
   prs.value= await musicpladdnber(props.data.id)
   console.log("--===>",  prs.value);

}

const router=useRouter()
const props = defineProps({
  data: {
    type: String,
    required: true
  }
});
import {getCurrentInstance} from "vue"
// *********跳转
const gomusic=(id)=>{
    var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
      }
    router.push({ 
    path: '/music',
    query: { id:props.data.id }
  })
}   


// **************

const usedata=ref({
    url:"https://img2.baidu.com/it/u=1018869899,3899411690&fm=253&fmt=auto&app=138&f=JPEG?w=269&h=500"
})
let $r=getCurrentInstance().appContext.config.globalProperties.$htps

onMounted(() => {

 
    $r.img(props.data.sareUrl).then(res=>{
        usedata.value.url=res
        console.log(usedata);
    })
    setprs()

})

</script>

<style  scoped>
 .top{
    width: 100%;
    height: 350px;
    overflow: hidden;
    position: relative;
  
  
}
.zz{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    z-index: 3;
    background-size: 100% 100%; /* 图片尺寸自适应元素大小 */
    background-repeat: no-repeat; /* 不重复平铺图片 */
    transition: all .3s;
    opacity: .6;
}


.zz:hover{
    opacity: 1;
    transform: scale(1.2); /* 鼠标悬停时放大 1.2 倍 */
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
z-index: 0;
   background: #FFFFFF;
    position: relative;
    overflow: hidden;
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



