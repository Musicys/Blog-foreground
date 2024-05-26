<template>
    <div class="prs">
       <div class="bt">评论<span style="font-size:.8rem; color:rgba(0,0,0,.4); margin-left:1em;">{{  length}}</span>
        <span class="but-bts" :class="Ispr?'ys1':'ys2'"  @click="setIspr(1)">最热</span>
        <span  class="but-bt"  :class="Ispr?'ys2':'ys1'" @click="setIspr(2)" >最新</span> </div>
        <div class="box">
            <div class="box-inp">

                <img :src="user" alt="">
                
               <div class="box-top">
                
                
                <textarea name="" id="text"  cols="20" rows="10" placeholder="欢迎高质量评论" v-model="TestNr"></textarea>
              
                <div class="box-but">
               <span style="color:rgba(0,0,0,.4)">还能输入{{NberSize}}个字符</span>

                <div class="" @click="plu">评论</div>
               </div>
               </div>
              
            </div>
        
        </div>
        <el-table v-loading="loading"   v-if="loading"    :data="data" style="width: 100%; height: 100%;">
     
    </el-table>
    <div class="but"  @scroll="checkScroll"  v-show="!loading">

        
<div class="cart" v-for="(i,index) in  data" :key="i.id">
<img class="img" :src="i.url" style="border-radius: 50%;" alt="">

<div class="" style="width:100%">

    <div class="cart-top">

<div class="top-left">



<span>{{ i.name }}</span>
<span>{{ i.createTime }}</span>
</div>

<div @click="pgood(i.id,index)" class="top-right">
<img src="../../static/inc_dz.png" alt="">

<span style="font-size: 12px;  color: rgba(0, 0, 0, .6);">{{ i.good }}</span>

</div>
</div>
<div class="cart-right">

{{ i.commentDesc }}
</div>
</div>

</div>
<el-table v-loading="Isjz"  v-if="Isjz"  style="width: 100%;   height: 100%;">
     
    </el-table>
<div class="tib" v-else>
{{  length==0?"等待你开来发":"无更多内容" }}
</div> 


</div>

    </div>
</template>

<script setup>

import {  ref,onMounted,watch,defineProps} from "vue";
import { porif,prList, prgood} from "../../htpps/indexs"

import { useRouter ,useRoute, onBeforeRouteUpdate} from 'vue-router';
import { ElMessage } from 'element-plus'
import {getuserdata} from "../../util/store"
import request from "../../htpps/request.js";
const route=useRoute()


const loading = ref(true)




const router = useRouter();
const NberSize=ref(200)
const TestNr=ref("");

// 评论排序**************
const Ispr=ref(true)
const Isnber=ref(1)
const setIspr=(key)=>{
    Isnber.value=key

    if(Isnber.value==1)
    {
        Ispr.value=true


    }else{
        Ispr.value=false
    
    }
  
    setdata()
}



// ***************滚动底部

let page={
    page:1,
    pageSize:15

}
const Isjz=ref(true)

const checkScroll= async (event)=> {
    const container = event.target;
    if(data.value.length==length.value)
    {
        Isjz.value=false
        return 
    }
// 计算容差值
const tolerance = 5;
console.log(container.scrollTop + container.clientHeight >= container.scrollHeight - tolerance);
// 判断是否滚动到底部
if (container.scrollTop + container.clientHeight >= container.scrollHeight - tolerance) {
    // 执行加载更多内容的操作
    page.page += 1;

    if(data.value.length==length.value)
    {
        Isjz.value=false
        return 
    }


    let arr = await prList({
        id: route.query.id,
        page: page.page,
        pageSize: page.pageSize,
        type: Isnber.value
    },true);
    let b=arr.records
    console.log("返回数据ddd==》s",arr);
    for(let i=0;i<b.length;i++)
    {
       b[i].url=await request.img( b[i].img)
     
    }
    
    // 如果没有新内容，则直接返回
    if ( b.length === 0) return;

    // 将新内容添加到数据列表中
    data.value.push(... b);
}
        }



// ****************************
// 用户信息

const user=ref("")

const setuser=async ()=>{
    let a= await getuserdata()
    console.log(user.value);
    user.value=await request.img( a.img)
}



// ********************


watch(TestNr, (newValue, oldValue) => {

    if(newValue.length>200)
    {
        TestNr.value = newValue.slice(0, 200);;
        return    NberSize.value =0;
    }
    
    NberSize.value = 200-newValue.length;

});



let data=ref([])
const length=ref(0)

// 评论-----------------------

const  setdata=async ()=>{
   
   loading.value=true
    
   let a =  await prList({
        id: route.query.id,
        page: 1,
        pageSize: page.pageSize,
        type: Isnber.value
    },true)
    length.value=a.total
   data.value=a.records
    for(let i=0;i<data.value.length;i++)
    {
        data.value[i].url=await request.img( data.value[i].img)
     
    }
    console.log("返回的数据",a);

    if(length.value==data.value)
    {
        Isjz.value=fasle
    }

    setTimeout(()=>{
         loading.value=false  
    },500)


}
const plu=()=>{

    if(!TestNr.value)
    {   
        ElMessage({
    message: '还没输入评论呢',
    type: 'warning',
  })
    }
  
    porif(route.query.id,TestNr.value,true).then(res=>{
       



        ElMessage({
                message: '感谢评论',
                type: 'success',
                plain: true,
            })
        TestNr.value=""
        setdata()
    })
}

const pgood=(id,index)=>{
    prgood(id).then(res=>{
        ElMessage({
    message: '点赞成功',
    grouping: true,
    type: 'success',
  })
  data.value[index].good+=1
    })
}

// -------------------------

onMounted(()=>{
  setdata(1)
  setuser()
})

</script>

<style  scoped>
.ys1{
    color:  rgba(0, 0, 0, .8);
}
.ys2{
    color:  rgba(0, 0, 0, .3);
}
.but-bt{
    
  
    padding-left:.5em ;
    border-left: 2px solid rgba(0, 0, 0, .4);
   
}
.but-bts{
    
    margin-left: 1em;
    padding-right: .5em;
    border-right:2px solid rgba(0, 0, 0, .4);

}
.tib{
    text-align: center;
    color: rgba(0, 0, 0, .3);
}
.bt{
    margin-bottom: 2em;
    line-height: 1.3em;
    display: flex;
justify-content: start;
align-items: center;
}
.prs{
width: 90%;


position: absolute;
bottom: 0;
height: 98vh;
display: flex;
flex-direction: column;

}
.box{
  
    width: 100%;
   height: 250px;
   
   border-radius: 10px;
   display: flex;
   flex-direction: column;
}
.box-inp{
    display: flex;
}
.box-top{
    padding: 20px;
    flex: 1 ;
    background: #F0F0F0;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}
.box-top textarea{
    border: none;
    outline: none;
    resize: none;
    background: #F0F0F0;
    padding: 10px;
    color: rgba(0, 0, 0, .8);
    font-size: 13px;
}
.box-inp img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.box-but{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, .3);
    font-size: 13px;
    padding-top: 1em;   
}
.box-but div{
    color: #F0F0F0;
    padding: 2px 10px;
    border-radius: 10px;
    background: #FC5531;
}

.cart{

    /* position: absolute; */
    
    display: flex;
    margin-bottom: 1.2em;
    width: 100%;
    }
    .cart-right{
        font-size: 13px;
        text-align: justify;
        line-height: 24px;
       
    }
.cart-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.top-left{
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
}

.top-left span{
    margin-right: 1em;
    font-size: 12px;
    color: rgba(0, 0, 0, .6);
}
.top-right{
   
    display: flex;
    justify-content: center;
    align-items: center;
}
.top-right>img{
    width: 15px;
    height: 15px;
    margin-right: 10px;
    margin-left: 10px;

}
.img{
    height: 34px;
    width: 34px;
   margin-right: 1em;
}
.but{
    margin-top: 50px;
    flex: 1;
    overflow: hidden;
    overflow: auto;
    padding: 1em;
    
    
}
.but::-webkit-scrollbar {
  display: none;
}
</style>