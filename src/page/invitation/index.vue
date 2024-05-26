<template>


    <div class="list">
    
        <div class="tag">
       <span  @click="fhurl(router.currentRoute.value.query.tab)">{{router.currentRoute.value.query.tab==1?"博客首页":"博客目录"}}</span>
       <el-icon size="10" style="  margin-left: .5em;
       color: #909399;
   
   "><ArrowRightBold /></el-icon>
        <span>文章标题</span>
      </div>

      <div class="left">

        <el-table v-loading="loading"  v-if="loading"  style="width: 100%;   height: 100%;">
     
    </el-table>
    <el-table v-loading="loading"  v-if="loading"  style="width: 100%;   height: 100%;">
     
    </el-table>
        <Aritcle :descdata="prsdata" v-show="!loading" ></Aritcle>
    
      </div>
      <div class="right" >
      
        <div class="right-top" >
          <el-table v-loading="loading"  v-if="loading"  style="width: 100%;   height: 100%;">
     
    </el-table>
            <Message :descdata="prsdata" v-show="!loading"  />
        </div>
        <div class="right-but"  v-show="!loading" >
        
            <Recommend />
        </div>

      </div>




    </div>
</template>

<script setup>
import Aritcle from "./Article.vue"
import Message from "./Message.vue"
import Recommend from "./Recommend.vue"
import {useStore} from "vuex"
import { ref ,onMounted,computed} from 'vue';
import { useRouter , onBeforeRouteUpdate} from 'vue-router';
const router = useRouter();
const ishome=ref(true)//是否是首页跳转
class invitation
{
    setishome(){

      
        let a=router.currentRoute.value.path;
       
        if(a!='/invitation')
        {
            ishome.value=false

        }
        else{
            console.log("等于");
        }
       
    }
    
}

const loading=ref(true)


new invitation().setishome()//判断路由


// 数据渲染
import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps
// 数据列表
const descdata=ref({

})
// 评论列表
const listdata=ref({

})
const list=ref(0)
class data{
    // 首页文章id
    a=1
    page=1
    pageSize=10
    constructor(is){


           this.setdatas()
   
       
       
    }
    setdatas(){
    
      setTimeout(()=>{
        this.a=router.currentRoute.value.query.id;
        this.setdata()
       this.setlistdata()
      })

   
    }
    async setdata(){
      console.log("router值",router.currentRoute.value);
      descdata.value=( await ($r.get("/desc/wz/list?id="+this.a)))
      descdata.value.url= await  $r.img(descdata.value.descImg)
      
     
      let a=await $r.get(`/desc/wz/nuber?id=${1}`)
      descdata.value.count=a.count
      descdata.value.sach=a.sach
      descdata.value.good=a.good
       descdata.value.biaoname=(await $r.get(`/label/list/sare/bq?id=${descdata.value.labelId}`)).name
     
       console.log("文章osssooo",{...descdata.value});


          


      
    }  
    
    async setlistdata(){
      
      listdata.value= (await $r.get('/comment/pr/list',{ 
        params: {
            id:this.a,
            page:this.page,
            PageSize:this.pageSize
      }
    })).records
     
       list.value=Object.keys({...listdata.value}).length
    for(let i in listdata.value)
    {

        listdata.value[i].url=await  $r.img(listdata.value[i].img)
        console.log( listdata.value[i].url);
    }
   }

   upde(){
      this.page++
      this.setlistdata()
    }     
    
}


// 在setup函数中监听路由变化
onBeforeRouteUpdate((to, from, next) => {
  // 执行你的逻辑
  console.log('路由从', from.href, '到', to.href);
   

  
  loading.value=true


  new data(true)
  setTimeout(()=>{
    loading.value=false
  },500)
 
  next();
});


const prsdata=computed(()=>{
    
    
  
  return {
    descdata:descdata.value,
    listdata:listdata.value,
    list:list.value
  }  
})


onMounted(()=>{
  
      new data()
      



setTimeout(()=>{
  loading.value=false
},500)
   

})












const fhurl=(tab)=>{
  if(tab==1)
  {
    router.push("/")
  }
  else{
    router.push("/contents")
  }
}




</script>

<style  scoped>

.right{
  
    width: 350px;
  
    display: flex;
    flex-direction: column;

   
  
}
.right-top{
    background: #FFFFFF;
    height: 350px;
    margin-bottom: 1em;
}
.right-but
{
    background: #FFFFFF;
 
  height: 140vh;
    
}
.left{
    flex: 1;
    background: #FFFFFF;
    margin-right: 20px;
    position: relative;
    padding-bottom: 92vh;
  
}
.list {

    width: 70%;
    margin: auto;
    min-height: 1200px;
    position: relative;
    margin-bottom: 1em;
    display: flex;

}
.tag{
    position: absolute;
    top: -30px;
    line-height: 30px;


}
.tag>span{
    margin-left: .5em;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
    font-size: 13px;
    cursor: pointer;

}

.tag>span:hover{
    color:  rgba(0, 0, 255, .4);

}
</style>