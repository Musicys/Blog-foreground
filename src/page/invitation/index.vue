<template>


    <div class="list">
        <div class="tag">
       <span>博客首页</span>
       <el-icon size="10" style="  margin-left: .5em;
       color: #909399;
   
   "><ArrowRightBold /></el-icon>
        <span>文章标题</span>
      </div>

      <div class="left">
        <Aritcle></Aritcle>
      
      </div>
      <div class="right">
      
        <div class="right-top">

            <Message/>
        </div>
        <div class="right-but">
        
            <Recommend/>
        </div>

      </div>




    </div>
</template>

<script setup>
import Aritcle from "./Article.vue"
import Message from "./Message.vue"
import Recommend from "./Recommend.vue"


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
    flex: 1;

}
.left{
    flex: 1;
    background: #FFFFFF;
    margin-right: 20px;
  
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