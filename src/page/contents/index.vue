<template>
    <div class="contentnts">
       <div class="letf">

        <span class="ys_2 ">推荐内容</span>
        <span class="ys">Springbootjava</span>
         <span class="ys">动漫社区</span>
        <span class="ys">c++</span>
        <span class="ys" v-for="i in 100">javascprit</span>

       </div>

       <div class="right">
            <div class="carts" v-for="i in 300">
                <img src="https://img2.baidu.com/it/u=2567815651,4023118117&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
                <span class="cart-bt">活在当下，梦想永不停息</span>
                <span class="cart-time">2024-1-25</span>
            </div>
       </div>
    </div>
</template>

<script setup>



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
    width: 100%;
   height: 100%;
  
    display: flex;
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
    height: 200px;
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
    display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  /* 将容器分成四列，每列占据相等的空间 */
     gap: 10px;  
     grid-template-rows: repeat(3, 250px); 
     min-height: 90vh;
    max-height: 90vh;
     overflow: auto;
     overflow: scroll;
    
   
}
</style>