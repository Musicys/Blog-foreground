<template>
    <div class="box">


        <div class="nr">
        
      
<span>青春如火，激情燃烧，让我们勇往直前，探索未知的世界。</span>
<span>年少轻狂，无畏挑战，追求梦想，绽放出绚丽的光芒。</span>
<span>阳光洒落在青春的路上，点亮前行的方向，注入无限的力量。</span>


        
        
        </div>
          <div class="cent"><input type="text" placeholder="我也说一句...."></div>
        <div class="but">
            
            <div class="">
            
                <span>留言（1200）</span>
            <button>全部</button>
            </div>
            <div class="">
                <button>发送</button>
            
            </div>
        
        
        </div>


    </div>
</template>

<script setup>

</script>

<style scoped>
.but button{
    border: none;
    background: #F8DFDF;
    padding: 5px;
    width: 100px;
    font-weight: 17px;
}
.but{
    width: 100%;

 display: flex;
 justify-content: space-between;
 margin-top: 2em;
}
.but span{
    font-size: 16px;
}
.cent{
    margin-top: 1em;


width: 100%;
}
.cent>input{
    float: right;
    user-select: none;

    padding: 10px;
    width: 300px;
    border: none;
    background: #EFEFEF;
}

.box{
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
   
}
.nr{
    padding-top: 1em;
    width: 70%;
    text-align: center;


}
.nr>span{
    line-height: 50px;
    white-space: nowrap;
    padding: 1em 0;
 
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    
}
</style>