<template>
   <div class="cart" @click="gointe()">
   
        <div class="logos"><img style=" width: 50px;
    height: 50px;" src="../../static/bjbs.png" alt=""></div>
        <div class="font-s">{{ props.data.biaoq }}</div>
        <span class="font-t">{{props.data.descBt}}</span>
        <div class="font-s" style="margin-bottom: 1em;">{{time
}}</div>

        <div class="nr"  >
        
        {{ props.data.descWz}}
        
        </div>
        <div class="font-a">阅读全文</div>
        <div class="bt">
            <div class=""><img  src="../../static/dzan.png" alt="">{{ props.data.descGood
 }} </div>
            <div class=""> <img src="../../static/pinr.png" alt="">{{  pr }}</div>
            <div class=""><img src="../../static/gk.png" alt="">{{ props.data.descSach
 }}</div>
        </div>
   </div>
</template>

<script  setup>
import { useRouter,useRoute } from 'vue-router';
const router = useRouter();
import { defineProps, ref ,computed,onMounted} from 'vue';
import {prnber} from "../../htpps/indexs"
const pr=ref(0)
const setpr= async ()=>{
    pr.value=await prnber(props.data.id)
    console.log("是否执行");

}

onMounted(()=>{
    setpr()
})

const props = defineProps({
  "data": {
   
    required: true
  },
  "sethome":{
    // typeof:function,
    required: true
  }

});


const gointe=()=>{
    // let a={...props.data}
    console.log({...props.data});
    props.sethome(false)
 
    router.push({ 
    path: '/invitation',
    query: { id: props.data.id,tab:1 }
  })

  
}

import $r from "../../htpps/request.js"


const count=ref(1);
const biaoq=ref("java")
const setbiaoq= async ()=>{
          
          //    console.log("=====>" ,typeof await $r.get(`/comment/pr/list/count?id=${this.id}`));
            
             let a=await $r.get(`/comment/pr/list/count?id=${this.id}`)
             if(typeof a=='number')
             {
              count=a
  
             }
             else{
              count=a.data
             }
            
            
            biaoq=await $r.get(`/label/list/sare/bq?id=${this.labelId}`).name
          }
    
       const time= computed(()=>{
            let dateString =   props.data.createTime
            let date = new Date(dateString);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
       

        })
    
 

</script>

<style  scoped>
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
    height: 50%;
    text-indent: 2em; /* 2em为首行缩进的大小 */
    width: 85%;
    color: black;
    font-size: 13px;
    line-height: 20px;
    overflow: hidden;
    text-align: justify;
    margin-bottom: 20px;
    perspective: 1000px; 
}
.cart{
    width: 300px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;

   background: #FFFFFF;
    position: relative;
    padding-top: 1.2em;
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
    font-size: 12px;
    color: #ABABAB;
    margin-top: .8em;
    font-weight: bold;
}
.font-t{
    font-size: 18px;
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