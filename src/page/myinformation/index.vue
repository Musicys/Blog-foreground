<template>
    <div class="mine">
      <div class="mine-left">
        <div class="">
        
        
        </div>
        <div class="">
        
        
        </div>
      </div>
      <div class="mine-right"></div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
    .mine{
        width: 70%;
        
      
        margin: auto;
        margin-bottom: 30px;
        display: flex;
        
    }
    .mine-left{
        flex: 1 ;
      display: flex;
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