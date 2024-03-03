<script setup>
import { ref, onMounted, onUnmounted, provide ,inject} from 'vue';


import Navigation from "./components/navigation/navigation.vue"
import Bottom from  "./components/bottom/bottom.vue"
// 动画效果 等

const tab=ref(1)
const cilcktab=(i)=>{
  tab.value=i 
  // console.log(tab.value); 

}
const visibility=ref(false)
const myElement = ref(null);
const handleScroll = () => {

  const distanceToTop = height+myElement.value.offsetHeight- window.pageYOffset-10;

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



class use{
  constructor(){
    
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setheight(405)
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});




// 主页数据v


import { useStore,mapGetters, mapMutations } from 'vuex'
import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps
const data=ref({
  bkName: "Robot"
  ,createTime: null,
  id: 1,
  imgarr: "1456",
  updateTime: "2024-02-04T18:48:06"
  ,userId: 2

})
// 用户数据
const userdata=ref({
        "name": "LiWan",
        "userName": "admin",
        "passwrod": "123",
        "userImg": null,
        "userQq": "2825424566",
        "userGitte": null,
        "userGithub": null,
        "userCsdn": null,
        "usernames": null,
        "userIntroductory": null,
        "userMesg": null,
})

// 用户数据是否优
const Isuser=ref(false)
class setdatas{
  user=useStore()
   constructor(){
      this.setdata()
      this.settab()
     
    }
    async setdata(){
      // 主页数据
      data.value=await $r.get("/home/list?id=1")
     
   
     $r.get("/user").then(res=>{
     userdata.value=res
     this.user.commit("user/setusedata", {...res,...data.value})
      // console.log("主页数据====》",this.user.state.user.Isuserdata);
      setTimeout(()=>{
        Isuser.value=this.user.state.user.Isuserdata
      },1000)

      if(!Isuser.value)
      {
        this.setdata()
      }

     })

    

      // 次数＋1
   
      


    }
    settab(){
      if(location.href.includes("contents"))
      {
        tab.value=2
      }
      else if(location.href.includes("share"))
      {
        tab.value=3
      }
      else if(location.href.includes("myinformation"))
      {
        tab.value=4
      }
        
    }
}






onMounted(() => {
  new setdatas()

 
  
})


import Loding from "./components/loding/Loding.vue"




</script>

<template>

  <div class="index" v-if="Isuser">
    <Navigation></Navigation>
    <div :class="visibility? 'top':''"   ref="myElement">
    
 




<div class="index_ml" v-if="!visibility">
  <div class="logo">
  <span>{{userdata.usernames}}</span>
  <span>{{data.bkName }}</span>
  </div>
  <router-link to="/" :class="tab==1?'ya_a':'ya_b'" @click="cilcktab(1)" >博客首页</router-link>
  <router-link to="/contents" :class="tab==2?'ya_a':'ya_b'" @click="cilcktab(2)">博文目录</router-link>
  <router-link to="/share"   :class="tab==3?'ya_a':'ya_b'"  @click="cilcktab(3)">图片分享</router-link>
  <router-link to="/myinformation"    :class="tab==4?'ya_a':'ya_b'"   @click="cilcktab(4)">我的信息</router-link>
</div>

<div class="index_mls" v-else>
  <div class="logos">
  <span>Music</span>

  </div>
  <router-link to="/" :class="tab==1?'ya_a':'ya_b'" @click="cilcktab(1)" >博客首页</router-link>
  <router-link to="/contents" :class="tab==2?'ya_a':'ya_b'" @click="cilcktab(2)">博文目录</router-link>
  <router-link to="/share"   :class="tab==3?'ya_a':'ya_b'"  @click="cilcktab(3)">图片分享</router-link>
  <router-link to="/myinformation"    :class="tab==4?'ya_a':'ya_b'"   @click="cilcktab(4)">我的信息</router-link>
</div>

    </div>

  

   <div style=" margin-top: 4em;">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


    </div>
    <!-- <Bottom></Bottom> -->
  </div>
    <Loding v-else></Loding>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {

  opacity: 0;
}
.top{

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
        height: 40px;
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
.index_mls{
  width: 70%;
  height: 100%;
  border: 1rxp solid black;
 
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.index_mls> a{
  padding: 1em;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
