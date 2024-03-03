<template>
   <div class="cart">
   
        <div class="logos"><img style=" width: 50px;
    height: 50px;" src="../../static/bjbs.png" alt=""></div>
        <div class="font-s">{{ biaoq }}</div>
        <span class="font-t">{{descBt}}</span>
        <div class="font-s" style="margin-bottom: 1em;">{{time
}}</div>

        <div class="nr" >
        
        {{ descWz}}
        
        </div>
        <div class="font-a">阅读全文</div>
        <div class="bt">
            <div class=""><img  src="../../static/dzan.png" alt="">{{ descGood
 }} </div>
            <div class=""> <img src="../../static/pinr.png" alt="">{{ count }}</div>
            <div class=""><img src="../../static/gk.png" alt="">{{ descSach
 }}</div>
        </div>
   </div>
</template>

<script >
import $r from "../../htpps/request.js"
export default {
    props:["data"],
    data(){
        return{
           ...this.data,
            biaoq:"java",
            count:"1"
        
        }
    },
    methods: {
        async setbiaoq(){
          
        //    console.log("=====>" ,typeof await $r.get(`/comment/pr/list/count?id=${this.id}`));
          
           let a=await $r.get(`/comment/pr/list/count?id=${this.id}`)
           if(typeof a=='number')
           {
            this.count=a

           }
           else{
            this.count=a.data
           }
          
          
           this.biaoq=await $r.get(`/label/list/sare/bq?id=${this.labelId}`).name
        }
    },
    mounted() {
        console.log("Cart====>",{...this.data});

        this.setbiaoq()
    },
    computed:{
        time(){
            let dateString =   this.createTime
            let date = new Date(dateString);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
       

        }
    }
    
}
</script>

<style  scoped>
.bt{
   
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(0,0,0,0.4);
    align-items: center;
    padding-top: .5rem;
 
    margin-bottom:15px;

}
.bt div>img{
 width: 25px;
 height: 25px;
 margin-right: 5px;

}
.bt div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
   
    font-size: 17px;
    color: rgba(0, 0, 0, .3);
}
.nr{
    text-indent: 2em; /* 2em为首行缩进的大小 */
    width: 85%;
    color: black;
    font-size: 13px;
    line-height: 24px;
    text-align: justify;
    margin-bottom: 20px;
    perspective: 1000px; 
}
.cart{
    width: 300px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
   

   background: #FFFFFF;
    position: relative;
    padding-top: 1.2em;
    box-shadow: -1px 1px 0 0 rgba(0, 0, 0, .1);
}
.cart div{

}
.logos{

    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);

}
.font-s{
    font-size: 12px;
    color: #ABABAB;
    margin-top: .8em;
    font-weight: bold;
}
.font-t{
    font-size: 18px;
    color: black;
}
.font-a{
    font-size: 18px;
    color: black;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 20px;
    border-left:1px solid rgba(0, 0, 0, .3);
    border-right:1px solid rgba(0, 0, 0, .3);
}


</style>