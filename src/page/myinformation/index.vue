<template>
    <div class="mine">
      <div class="mine-left">
        <div class="mine-left-top">
            
            <img class="mine-img" src="https://img2.baidu.com/it/u=1018869899,3899411690&fm=253&fmt=auto&app=138&f=JPEG?w=269&h=500" alt="">
            
            
            <div class="jr">
                


             <div class="jr">
                <div class="bt">Rotbot的博客</div>
            
                <div class="name"><span style="font-size: 20px; fonw-w">名称：</span>music</div>
                <div class="name"><span style="font-size: 20px;">就业：</span>前端web开发</div>

             </div>   
            <p class="nr"><span style="font-size: 24px;">个人简述：</span>我是一名富有创造力的Web开发者，专注于设计和构建精美、高效的网站。通过运用HTML、CSS和JavaScript等前端技术，我能够打造出令人印象深刻的用户界面和流畅的交互体验。

我对设计和用户体验有着极高的敏感度，注重细节并追求完美。我善于将客户的愿景转化为现实，通过独特的创意和灵感，为他们提供令人赞叹的网页设计。

我熟练掌握多种前端框架和库，如React、Angular和Vue.js，能够利用它们加速开发过程并提供更好的用户体验。同时，我还深入了解后端开发，能够以Node.js、Python(Django/Flask)或Ruby on Rails等为基础构建强大的服务器端逻辑和数据管理。

我明白网站的响应式设计的重要性，在不同的设备和屏幕尺寸下，确保网站美观而流畅地呈现。我的目标是为用户提供一种无论在何时何地都能愉悦地浏览网站的体验。

除了技术方面的知识和技能，我还注重与客户的良好沟通和合作。我善于倾听客户需求，并根据他们的期望和要求提供个性化的解决方案。

总而言之，作为一名Web开发者，我致力于创造出优雅、功能强大且具有吸引力的网站。我的目标是通过我的技术和创意，为用户带来出色的Web体验，提升品牌形象并满足业务需求。</p>
            </div>

       
                



  
        </div>
        <div class="mine-left-top mine-left-but">
          <div class="top">
            <img class="mine-img" src="https://img2.baidu.com/it/u=1018869899,3899411690&fm=253&fmt=auto&app=138&f=JPEG?w=269&h=500" alt="">
            
                <div class="lyb">
                    <div class="bt">留言板</div>
               



                    <p class="nr" style="width: 70%;    text-align-last: center;   ">
                    在繁忙的时光中停留，感受微风在指尖轻拂；在寂静的夜晚里，倾听星辰的低语；生命是一段奇妙旅程，让快乐和梦想相伴；放飞心灵的翅膀，翱翔在自由的天空；微笑是阳光，温暖心灵的花朵。</p>
                    
                
               
                </div>
                
                
                </div>


                <div class="prly">
                
                    <Prbox/>
                </div>
        
        </div>
      </div>
      <div class="mine-right">

            <Right></Right>
      </div>
    </div>
</template>

<script setup>
 import Prbox from "./Prbox.vue"
import Right from "./Right.vue"


</script>

<style  scoped>
.mine-right{
    height: 100%;
   
}
.mine-left-but{
    display: flex;
    flex-direction: column;
 
   

}
.lyb{
  
    height: 250px;
    display: flex;

    flex-direction:column;
    align-items: center;
    overflow: hidden;
 
}

.prly{
    min-width: 100%;
    flex: 1 ;
    
   
}
.bt{
   
    text-align: center;
    font-size: 26px;
    margin-bottom: 2em;
    margin-top: 10px;

}
.name{
    font-size: 18px;
    margin-bottom: 1em;
    color: rgba(0, 0, 0, .8);
    font-size: 14px;
}
.jr{
    /* flex: 1 ;
    background: red; */
}
.nr{
    text-align: justify;
    color: rgba(0, 0, 0, .8);
    font-size: 14px;
    line-height: 36px; /* 像素值 */
    
}
    .mine-left-top
    {
        padding: 1em;
        
       
       
       
    }


.mine-img{
        width: 400px;
         float: left; /* 或 right，根据需要选择左浮动或右浮动 */
         margin-right: 8px;
      
        height: 250px;
    }
    .mine{
        
        width: 70%;
        
      
        margin: auto;
        margin-bottom: 30px;
        display: flex;
       
    }
    .mine-left{
        flex: 1 ;
      display: flex;
      width: 70%;
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