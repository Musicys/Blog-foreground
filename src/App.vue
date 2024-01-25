<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue';
import Navigation from "./components/navigation/navigation.vue"
import Bottom from  "./components/bottom/bottom.vue"
const tab=ref(1)


const cilcktab=(i)=>{
  tab.value=i 
  console.log(tab.value); 

}



const visibility=ref(false)
const myElement = ref(null);
const handleScroll = () => {

  const distanceToTop = height+myElement.value.offsetHeight- window.pageYOffset-10;
  console.log("gd");
 if(distanceToTop<0)
 {
  
  if(visibility.value==false)
  {
    visibility.value=true
  
  }
 }
 if(distanceToTop>0)
 {
  if(visibility.value==true)

{
  visibility.value=false
 
}  
 }
};

let height=0;

const setheight=(vlaue)=>{

  height=vlaue
  console.log(height);

}
provide('setheight', setheight);
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setheight(495)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});



</script>

<template>
 
  <div class="index">
    <Navigation></Navigation>
    <div :class="visibility? 'top':''"   ref="myElement">
    
 

<div class="index_ml">
  <div class="logo">
  <span>Music</span>
  <span>Robot</span>
  </div>
  <router-link to="/" :class="tab==1?'ya_a':'ya_b'" @click="cilcktab(1)" >博客首页</router-link>
  <router-link to="/contents" :class="tab==2?'ya_a':'ya_b'" @click="cilcktab(2)">博文目录</router-link>
  <router-link to="/share"   :class="tab==3?'ya_a':'ya_b'"  @click="cilcktab(3)">图片分享</router-link>
  <router-link to="/myinformation"    :class="tab==4?'ya_a':'ya_b'"   @click="cilcktab(4)">我的信息</router-link>
</div>
    </div>

  

   <div style=" margin-top: 4em;">
    <router-view></router-view>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<style scoped>

.top{
 opacity: .9;
  width: 100%;
  position: fixed;
  background: #FFFFFF;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 999;
  animation: scaleHeight .5s ease-in-out forwards;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

 @keyframes  scaleHeight {
  
  0% {
        height: 0;
      }
      100% {
        height: 80px;
      }
 }

.index{
  min-width: 1284px;
max-width: 1980px;
position: relative;
margin: auto;



    
}
.logo{
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.logo>span:nth-child(1)
{
  font-size: 26px;
}
.logo>span{
 
}


.index_ml{
  width: 70%;
  height: 80px;
  border: 1rxp solid black;
 
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.index_ml>a{
  
  padding:10px 60px;
  font-size: 21px;
}

.ya_a{
  background: #212121;
  color: #FFFFFF;
}

.ya_b{
  background:#FFFFFF ;
  color:#212121;
}

a{

text-decoration: none;



font-family:sans-serif;

font-size: 12px;

}

</style>
