<template>
    <div class="pr">
       <div class="bt">评论</div>
        <div class="box">
            <div class="box-inp">

                <img src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                
               <div class="box-top">
                
                
                <textarea name="" id="text"  cols="20" rows="10" placeholder="欢迎高质量评论" v-model="TestNr"></textarea>
              
                <div class="box-but">
               <span style="color:rgba(0,0,0,.4)">还能输入{{NberSize}}个字符</span>

                <div class="">评论</div>
               </div>
               </div>
              
            </div>
        
        </div>
        <div class="but" >
            <div class="cart" v-for="i in 10">
            <img class="img" src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
            
            <div class="">
            
                <div class="cart-top">
        
        <div class="top-left">
        
       
        
        <span>Music</span>
        <span>2024.10.26</span>
        </div>
        <div class="top-right">
        <img src="../../static/inc_dz.png" alt="">

        <span style="font-size: 12px;  color: rgba(0, 0, 0, .6);">99</span>
      
        </div>
    </div>
    <div class="cart-right">
      
        在繁忙的时光中停留，感受微风在指尖轻拂；在寂静的夜晚里，倾听星辰的低语；生命是一段奇妙旅程，让快乐和梦想相伴；放飞心灵的翅膀，翱翔在自由的天空；微笑是阳光，温暖心灵的花朵。
    </div>
            </div>
        
        </div>
        
        </div>
        


    </div>
</template>

<script setup>
import {  ref,onMounted,watch} from "vue";

const NberSize=ref(200)
const TestNr=ref("");

watch(TestNr, (newValue, oldValue) => {
    if(newValue.length>200)
    {
        TestNr.value = newValue.slice(0, 200);;
        return    NberSize.value =0;
    }
    
    NberSize.value = 200-newValue.length;

});

onMounted(()=>{

})

</script>

<style  scoped>

.pr{
 width: 100%;
 
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
    display: flex;
    margin-bottom: 1em;
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
}
</style>