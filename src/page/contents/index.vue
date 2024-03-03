<template>
    <div class="contentnts">
       <div class="letf">

        <span v-for="(i,key) in tages" :key="i.id" :class=" tabtais==key?'ys_2':'ys' " @click="settabtais(key,i)">{{ i. name }}</span>
       

       </div>

       <div class="right">
            <div class="carts" v-for="i in seachtagarr">
                <img src="https://img2.baidu.com/it/u=2567815651,4023118117&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
                <span class="cart-bt">活在当下，梦想永不停息</span>
                <span class="cart-time">2024-1-25</span>
            </div>
       </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from "vue"

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps

    // 标签
 const tages = ref({

})

// 选中标签内容
const seachtagarr=ref([

])

// 选中的标签
const tabtais=ref(0)
// =====>methods

const settabtais=async (id,i)=>{
   
    tabtais.value=id
    seachtagarr.value=await $r.get(`/desc/wz/list/bq?labid=${i.id}`)
    console.log(await $r.get(`/desc/wz/list/bq?labid=${i.id}`));
}


// =====>mounted




class setdata{

    constructor()   {
       this.settages()
      
    }
   async settages(){
        tages.value=(await $r.get("/label/list/sare?page=1&pagesize=9999")).records
       settabtais(0, tages.value[0])
    }


}
onMounted(()=>{
    new setdata()
})


</script>

<style  scoped>
.letf{
  overflow: hidden;
  position: relative;
}

.letf::-webkit-scrollbar {
  width: 0px; /* 滚动条宽度 */
  background-color: transparent; /* 滚动条背景色 */
  transition: opacity 0.2s ease-in-out; /* 过渡效果 */
}

.letf:hover::-webkit-scrollbar {
  opacity: 0; /* 鼠标悬停时，滚动条隐藏 */
}

.letf::-webkit-scrollbar-thumb {
  background-color: #888; /* 鼠标悬停时，滚动条滑块颜色 */
}
.cart-time{

    font-size: 13px;
    color: rgba(0, 0, 0, .3);
}
.carts{
  width: 230px;
   height:200px;
   
    display: flex;
    margin-left: 1em;
    flex-direction: column;
    margin-bottom: 10px;
    flex-wrap: wrap;
  

}
.cart-bt{
    max-height: 40px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, .5);

}
.carts > img{
    width: 100%;
    height: 150px;
    border-radius: 10px;
}
.contentnts{
    width: 70%;
   
    margin: auto;
    display: flex;
    margin-bottom: 1em;
}
.letf{
    
    width: 250px;
   
    background: #FFFFFf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
    padding: 1em;
    min-height: 90vh;
    max-height: 90vh;
     overflow: auto;
     overflow: scroll;
}
.letf>span{
    text-align: center;

    width: 95%;
    line-height: 20px;
    font-size: 13px;
    font-weight: 500;
   
    border-radius: 10px;
    transition: color .5s;
    padding: 10px 0;
    
    transition-behavior: normal;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    margin-bottom: 10px;

}
.ys{
    color: rgba(0, 0, 0, .5);
}
.ys_2{
    color: #409EFF;
    background: #ECF5FF;
}
.letf>span:hover{
    color: #409EFF;
}
.right{
    background: #FFFFFf;
    flex: 1;
    margin-left: 1em;
    padding: 1rem;
    display: flex;
    
    justify-content: start;
    flex-wrap: wrap;
  align-content: start;
     min-height: 90vh;
    max-height: 90vh;
     overflow: auto;
     overflow: scroll;
    
   
}
</style>