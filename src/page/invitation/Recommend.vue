<template>
    <div class="recom" ref="myElement">
            <div class="bt">最近发表</div>

        <div class="recom-cart"  v-for="i in Nber.value">
        
        <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wkyv5_jbDUpoNjrI8Nm1SwHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">
        <div class="recom-cart-left">
            <p style="line-height: 20px; text-align: justify;"> 和尚 131 有些爱没说出口，可我知道你一直都在</p>
            <span>2024.10.10</span>
        </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const myElement = ref(null);
const Nber = ref(6);

class Nuber{
    value=6;
    constructor(){
        this.value=Math.round((myElement.value.offsetHeight-60)/170)
        console.log('数据', this.value);
    }
    get(){
        return this.value
    }

}

onMounted(() => {
  
    Nber.value=ref(new Nuber().get());
    
    
});
</script>

<style scoped>
.recom{
   
    width: 100%;
    height: 100%;
   display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

}
.bt{
    font-size: 17px;
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, .4);
  
}
.recom-cart{
    display: flex;
    padding: 10px;
}
.recom-cart img{
    width: 250px;
    height: 150px;
  
}
.recom-cart-left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    font-size: 13px;
   
}
</style>