<template>
    <div class="aritcle">
        <div class="bt">
            如何用Python将普通视频变成动漫视频
        
        
        </div>
        <div class="time">
        <span>发表时间：</span>
        <span>2024-1-23 17:50</span>
        </div>

        <div class="bq">
        <span>标签：</span>
            <div class="bq_xx">
            动漫社区
            </div>
            <div class="bq_xx">
            动漫社区
            </div>
            <div class="bq_xx">
            动漫社区
            </div>
        </div>

        <div class="nr">
            <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wkyv5_jbDUpoNjrI8Nm1SwHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="">

            <p>
            《进击的巨人》是一部由日本漫画家谏山创创作的漫画作品，后被改编成电视动画和真人电影，并引起了广泛的关注和热议。

故事设定在一个被巨人统治的世界。巨人是一种高大、强壮而具有灵性的生物，它们食人且对人类毫不留情。人类为了生存，只能围绕着三座巨大的城墙中的一个——玛利亚、罗莎和希娜最后的自由地区生活。然而，当一只被称为“超大型巨人”的巨人出现并摧毁了城墙，人类社会陷入了巨人的袭击之中。

故事的主人公是艾伦·耶格尔，一个渴望消灭巨人并重建被摧毁的世界的青年。艾伦和他的朋友们加入了军队，并接受了训练，成为了人类的战士。他们利用一种叫做立体机动装置的设备来与巨人战斗。立体机动装置可以帮助他们在空中自由地移动，攻击巨人的弱点——它们的颈部。

随着剧情的发展，艾伦和他的朋友们不断面对各种各样的巨人，揭示了巨人与人类之间的关系的复杂真相。他们也与其他人类面对面地交战，包括那些企图统治人类的政治势力。在这个充满危险、战斗和谜团的世界中，艾伦和他的伙伴们将不断面对考验，为了自由和和平而奋斗。

《进击的巨人》以其引人入胜的故事情节，复杂的人物关系和惊人的战斗场面而闻名。它深入探索了人性、权力、信念和自由等主题，并提出了许多观众思考的问题。该作品的动画改编也受到了广大观众的喜爱，获得了众多奖项和好评。

总之，《进击的巨人》是一部令人热血沸腾、令人着迷并引人深思的动漫作品，值得一看。


</p>


    
        </div>
 <div class="nr-but">
    <div class=""><img src="../../static/inc_dz.png" alt=""><span>99</span></div>
    <div class=""><img src="../../static/inc_pr.png" alt=""><span>99</span></div>
</div>
        <div class="pr">
        
      
        <Pr></Pr> 

        <div class="pr_but">
            暂无更多评论
        </div>
        </div>

    </div>
</template>

<script setup>
import Pr from "./Pr.vue"

</script>

<style scoped>
p{
    text-indent: 2em; /* 2em为首行缩进的大小 */
}
.pr_but{
    margin-top: 3em;
    text-align: center;
    color: rgba(0, 0, 0, .3);
}
.nr-but{
    display: flex;
    justify-content: end;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    margin-bottom: 1em;
}
.nr-but>div {
  
    display: flex;
    justify-content: center;
    align-items: center;
}
.nr-but img{
    width: 25px ;
    
    height: 25px;
}
.nr-but span{
    margin:1em ;
    font-size: 13px;
}
.pr{
    width: 100%;
    min-height: 500px;

}

.nr img{
width: 100%;
margin:10px ;
}
.nr {
    font-size: 13px;
    line-height: 36px;

    text-align: justify;

}
.aritcle{
   padding: 1em 1.5em;
    
}
.bt{
    line-height: 50px;
    width: 100%;
    font-weight: 450;
    
    font-weight: 28px;
  
}
.time{
    line-height: 20px;
    font-size: 12px;

}
.bq{
    display: flex;
   
    justify-content: start;
    line-height: 25px;
    font-size: 12px;
    align-items: center;
}
.bq>div{
    margin-right: 5px;
    height: 16px;
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 12px;
    line-height: 16px;
    background: #F0F0F0;
}
</style>