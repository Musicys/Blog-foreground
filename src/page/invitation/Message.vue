<template>
    <div class="aurl">
        <div class="top">
        
            <img src="https://img1.baidu.com/it/u=3519458463,1887460190&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">

            <span>Music</span>
        </div>

        <div class="girb">
            
            <div class=""><span>原创</span><span>99</span></div>
            <div class=""><span>访问</span><span>99</span></div>
            <div class=""><span>点赞</span><span>99</span></div>
            <div class=""><span>帖子</span><span>99</span></div>

        
        </div>



        <div class="box">
            <Aurl></Aurl>
        </div>

        <div class="but">
            <div class=""><img src="../../static/mes_dz.png" alt=""><span>点赞</span><span>99</span></div>
            <div class=""><img src="../../static/meg_pr.png" alt=""><span>评论</span><span>99</span></div>
            <div class=""><img src="../../static/msg_ydl.png" alt=""><span>阅读量</span><span>99</span></div>
        
        
        </div>
    </div>
</template>

<script setup>

import Aurl from "./../../components/Aurl/Aurl.vue"


</script>

<style scoped>
.but{
    width: 80%;
    margin:10px auto;
    display: grid;
    gap: 10px;
    
    grid-template-columns: repeat(3,1fr);
}
.but div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
   
    margin-bottom: 1.2em;
    align-items: center;
}
.but div>img{
    width: 25px;
    height: 25px;
    
}
.but div>span{
    font-size: 13px;
}

.girb{
    border-bottom: 1px solid rgba(0, 0, 0, .3);

    width: 100%;
    display: grid;
    margin-top: 1em;
    grid-template-columns: repeat(4,1fr);
    height: 80px;
    gap: 13px;

}
.girb>div{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
    width: 100%;
    width: 100%;
}
.girb>div>span:nth-child(1)
{
    font-size: 15px;

}
.girb>div>span:nth-child(2)
{
    font-size: 13px;
    margin-top: .5em;

}
.top{
    display: flex;


   align-items: center;
   height: 70px;
   padding-left: 1em;
   justify-content: start;

}
.top>img{

    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #171313;

}
.top>span{
    margin-left: 1em;
    font-size: 17px;
}
.aurl{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
   margin-top: 1em;
    
}

.box{
    width: 90%;
    height: 100px;
    margin-top: 1em;
    margin: auto;
 
}
</style>