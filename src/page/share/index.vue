<template>
    <div class="box">
        <Cart v-for="i in 16"></Cart>
    </div>
</template>

<script setup>
    import Cart from "./Cart.vue"
</script>

<style scoped>

.box{
    width: 70%;
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    gap: 10px;
    margin-bottom: 1em;
}
.box>div{
   
}
</style>