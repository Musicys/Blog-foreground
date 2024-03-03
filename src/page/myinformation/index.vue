<template>
    <div class="mine">
      <div class="mine-left">
        <div class="mine-left-top">
            
            <img class="mine-img" :src="userzy" alt="">
            
            
            <div class="jr">
                


             <div class="jr">
                <div class="bt">{{useStore().state.user.userdata.bkName}}的博客</div>
            
                <div class="name"><span style="font-size: 20px; fonw-w">名称：</span>{{useStore().state.user.userdata.name}}</div>
                <div class="name"><span style="font-size: 20px;">就业：</span>{{useStore().state.user.userdata.userZy}}</div>

             </div>   
            <p class="nr"><span style="font-size: 24px;">个人简述：</span>
            
           
{{useStore().state.user.userdata.
userIntroductory}}

</p>
            </div>

       
                



  
        </div>
        <div class="mine-left-top mine-left-but">
          <div class="top">
            <img class="mine-img" :src="userlybmf" alt="">
            
                <div class="lyb">
                    <div class="bt">留言板</div>
               



                    <p class="nr" style="width: 70%;    text-align-last: center;   ">
                       
                        {{useStore().state.user.userdata.userMesg}}
                        </p>
                </div>
                
                
                </div>


                <div class="prly">
                
                    <Prbox/>
                </div>
        
        </div>
      </div>
      <div class="mine-right">

            <Right></Right>
      </div>
    </div>
</template>

<script setup>
import Prbox from "./Prbox.vue"
import Right from "./Right.vue"

import {useStore} from "vuex"
import {ref} from "vue"

// const usedata=ref()
console.log("响应数据",{...useStore().state.user.userdata});

import {getCurrentInstance} from "vue"
let $r=getCurrentInstance().appContext.config.globalProperties.$htps

const userzy=ref()//职业封面

const userlybmf=ref()//留言封面
$r.img(useStore().state.user.userdata.userZyimg).then(res=>{
    userzy.value=res
})
$r.img(useStore().state.user.userdata.userLybimg).then(res=>{
    userlybmf.value=res
})

for(let i in useStore().state.user.userdata)
{
    console.log(i);
}
</script>

<style  scoped>
.mine-right{
    height: 100%;
   
}
.mine-left-but{
    display: flex;
    flex-direction: column;
 
   

}
.lyb{
  
    height: 250px;
    display: flex;

    flex-direction:column;
    align-items: center;
    overflow: hidden;
 
}

.prly{
    min-width: 100%;
    flex: 1 ;
    
   
}
.bt{
   
    text-align: center;
    font-size: 26px;
    margin-bottom: 2em;
    margin-top: 10px;

}
.name{
    font-size: 18px;
    margin-bottom: 1em;
    color: rgba(0, 0, 0, .8);
    font-size: 14px;
}
.jr{
    /* flex: 1 ;
    background: red; */
}
.nr{
    text-align: justify;
    color: rgba(0, 0, 0, .8);
    font-size: 14px;
    line-height: 36px; /* 像素值 */
    
}
    .mine-left-top
    {
        padding: 1em;
        
       
       
       
    }


.mine-img{
        width: 400px;
         float: left; /* 或 right，根据需要选择左浮动或右浮动 */
         margin-right: 8px;
      
        height: 250px;
    }
    .mine{
        
        width: 70%;
        
      
        margin: auto;
        margin-bottom: 30px;
        display: flex;
       
    }
    .mine-left{
        flex: 1 ;
      display: flex;
      width: 70%;
      flex-direction: column;
      


        
    }
    .mine-left>div:nth-child(2)
    {
        margin-top: 1em;
    }
    .mine-left>div{
        flex: 1;
        background: #FFFFFF;

    }
    .mine-right{
        margin-left: 1em;
        width: 22%;
        height: 1200px;
        background: #FFFFFF;

    }
</style>