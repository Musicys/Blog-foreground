<template>
    <div class="flex">
       <div class="box"><img src="../../static/github.png" alt=""><span>github</span></div>
       <div class="box"><img src="../../static/QQ.PNG" alt=""><span>QQ</span></div>
       <div class="box"><img src="../../static/gitte.png" alt=""><span>gitte</span></div>
       <div class="box"><img src="../../static/csnd.png" alt=""><span>cnds</span></div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.flex{
     width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr); 
    gap: 5px;


}
.box{
    width: 100%;


    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.flex img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.flex  span{
    font-size: 13px;
 
}
</style>