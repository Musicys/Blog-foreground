<template>
         <div class="bt">最近发表</div>
    <div class="recom" ref="myElement">
       

        <div class="recom-cart"  v-for="i in Nbers" :key="i.id" @click="gocontent(i.id)">
        
        <img :src="i.url" alt="" style="width: 220px;">
        <div class="recom-cart-left">
            <p style="line-height: 20px; text-align: justify;"> {{i.descBt}}</p>
            <span>{{ i.id }}</span>
            <span>{{time(i.createTime)}}</span>
        </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted ,computed} from 'vue';

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps
import {desclist} from "../../htpps/indexs"

const time= (time)=>{ 
            let dateString =   time
            let date = new Date(dateString);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
       

        }

const myElement = ref(null);
const Nbers = ref({

});
let pege={
    page:1,
   pageSize:10
}
class Nuber{
  
    constructor(){
      this.setdata()
    }     
    async setdata(){
        this.pageSize  =Math.round((myElement.value.offsetHeight-60)/170)
        let a=await desclist({
            page:pege.page,
            pageSize:pege.pageSize
        })


        console.log("页面时胡",a,{
            page:this.page,
            pageSize:this.pageSize
        });
        Nbers.value=a.data.records
        for(let i in Nbers.value)
    {

        Nbers.value[i].url=await  $r.img(Nbers.value[i].descImg)
        console.log( Nbers.value[i].url);
    }


    }  
   

}
import {useRouter} from "vue-router"
const router=useRouter()

const gocontent=(id)=>{
    router.push({path:"/invitation",query:{id:id}})
}
onMounted(() => {
  
 new Nuber()
    
});
</script>

<style scoped>
.recom{
   
    width: 100%;
    height: 100%;
    overflow-y:auto;
    
   display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: #FFFFFF;
    padding-bottom: 1em;
}
.bt{
    font-size: 17px;
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
  
}
.recom-cart{
    display: flex;
    padding: 10px;
}
.recom-cart img{
    width: 250px;
    height: 150px;
  
}
.recom-cart-left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    font-size: 13px;
   
}
</style>