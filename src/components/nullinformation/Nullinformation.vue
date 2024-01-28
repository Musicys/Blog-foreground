<template>
    <div class="home">
           
            <span>暂无内容</span>
            <img src="../../static/index.png" alt="">
    </div>
</template>

<script >
export default {
    props: {
    childData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.home{
  width: 100%;
 
  display: flex;
  flex-direction: column;
  height: 40vh;
  align-items: center;
  justify-content: center;
}
.home img{
  width: 250px;
  height: 250px;
  margin-top: 2em;
  margin-bottom: 3em;
}
.home span{
  font-size: 24px;
  
  color: #B3B3B3;
}
</style>