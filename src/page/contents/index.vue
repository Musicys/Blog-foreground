<template>
    <div class="contentnts">
       <div class="letf">

        <span class="ys_2 ">推荐内容</span>
        <span class="ys">Springbootjava</span>
         <span class="ys">动漫社区</span>
        <span class="ys">c++</span>
        <span class="ys">javascprit</span>

       </div>

       <div class="right">
            <div class="carts" v-for="i in 3">
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
.cart-time{

    font-size: 13px;
    color: rgba(0, 0, 0, .3);
}
.carts{
    width: 100%;
   height: 100%;
  
    display: flex;
    flex-direction: column;

  flex-wrap: wrap;

}
.cart-bt{
    max-height: 40px;
    margin-bottom: 5px;
    font-size: 16px;
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
    height: 1200px;
    background: #FFFFFf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
    padding: 1rem;
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
     height: 1200px;
 
     overflow: auto;
     overflow: scroll;
    
   
}
</style>