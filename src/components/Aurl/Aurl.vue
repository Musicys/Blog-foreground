<template>
    <div class="flex">
       <div class="box"><img src="../../static/github.png" alt=""><span><a target="_blank" :href="userGithub">github</a></span></div>
       <div class="box"><img src="../../static/QQ.png" alt=""><a target="_blank" :href="`tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=${userQq}&website=www.oicqzone.com`">QQ</a></div>
       <div class="box"><img src="../../static/gitte.png" alt=""><span><a target="_blank" :href="userGitte">gitte</a></span></div>
       <div class="box"><img src="../../static/csnd.png" alt=""><a target="_blank" :href="userCsdn">csdn</a></div>
    </div>
</template>

<script setup>
import { toRefs } from "vue";
import {useStore} from "vuex"



const {userGitte,userGithub,userCsdn,userQq}=toRefs(useStore().state.user.userdata) 

</script>




<style  scoped>
a{
    text-decoration: none; /* 清除下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
}
.flex{
     width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr); 
    gap: 5px;


}
.box{
    width: 100%;


    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.flex img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.flex  span{
    font-size: 13px;
 
}
</style>