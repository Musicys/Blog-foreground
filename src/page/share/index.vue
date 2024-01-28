<template>

    <div class="flex">
        <div class="box" v-if="DataNull">
            <div class="box-cart" v-for="i in 10" :key="i">
            
                <Cart ></Cart>
                
            </div>
           
    </div>
        <Nullinformation :childData="123" v-if="!DataNull"></Nullinformation>
    </div>
</template>

<script setup>
import{ref} from "vue"
    import Cart from "./Cart.vue"
    import Nullinformation from "../../components/nullinformation/Nullinformation.vue"
    const DataNull=ref(true)
</script>

<style scoped>
.flex{
    width: 70%;
    margin: auto;
    min-width: 899px;
    min-height: 90vh;
    max-width: 1980px;
    display: flex;
    justify-content: center;
    align-items: center;
  
}
.box{
    width: 100%;
   
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    margin: auto;
    gap: 10px;

    margin-bottom: 1em;
   
}
.box-cart{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 1em;
}
</style>