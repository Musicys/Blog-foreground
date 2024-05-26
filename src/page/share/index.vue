<template>

    <div class="flex">
        <div class="box" v-if="DataNull">
            <div class="box-cart" v-for="i in data.data" :key="i.id">
            
                <Cart :data="i" ></Cart>
                
            </div>
           
    </div>
   
        <!-- <Nullinformation :childData="123" v-if="!DataNull"></Nullinformation> -->
    </div>
    <div class="page">
   <el-pagination layout="prev, pager, next" 
   
   v-model:current-page="data.page"
      v-model:page-size="data.pageSize"
     
    
   
    
      :total="data.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
   
  />
  </div>
</template>

<script setup>
    import{ref,onMounted} from "vue"
    import Cart from "./Cart.vue"
    import Nullinformation from "../../components/nullinformation/Nullinformation.vue"
    import {getCurrentInstance} from "vue"

let $r=getCurrentInstance().appContext.config.globalProperties.$htps


    const DataNull=ref(true)





    // 分页
const total=ref(6)
// 当前第几页
const currentPage4 = ref(1)
// 每页数据
const pageSize4 = ref(3)



const data=ref({

})

class Data{
    page=1
    pageSize=8
    total=1
    constructor(){
       this.setdata();
    }
    async setdata(){
        let a=( await $r.get(`/sare/list/sj?Page=${this.page}&PageSize=${this.pageSize}`))
        data.value.page=this.page
        data.value.pageSize=this.pageSize
        data.value.data= a.data.records
        data.value.total=a.data.total

        console.log("===========>data.vue",a);
    }
   
    xyy(page){
       
        this.page=page
        this.setdata()
    }
    

    
}
    let user=   new Data();

onMounted(()=>{
 
})






const handleSizeChange = (val) => {
  console.log(`${val} items per pagexxx`)
//   user.up
}
const handleCurrentChange = (val) => {
  console.log(`current pagxxxxe: ${val}`)
  user.xyy(val)

}
</script>

<style scoped>
.page{
   width: 70%;
   margin: auto;
   display: flex;
   justify-content: center;
   padding:10px 20px;
   align-items: center;
   height: 20px;

}
.flex{
    width: 70%;
    margin: auto;


    display: flex;
    justify-content: center;
    align-items: center;
  
}
.box{
    width: 100%;
  
    height: 90vh;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
 
    gap: 10px;
    margin-bottom: 1em;
   
}
.box-cart{
   width: 100%;
   max-height: 404px;
    display: flex; 
    justify-content: center;
   align-items: center; 
   
   margin-bottom: 1em;
}
</style>