<template>
    <div class="music-pege" >
        <img class="img"    :src="data.imgurl" alt="">
        <div class="zz" >

               <span class="tile" :class="! Isgc?'ys2':'ys1'"> 做自己的光 不需要多亮</span>
                 <span class="tile2 " :class="! Isgc?'ys2':'ys1'">zuo zi ji de guang bu xu yao duo liang</span>

            <div class="bt" >
                <div class="music">
             <div class="item ones" style=" " ></div> 
        <div class="item one"></div> 
        <div class="item two"></div>
        <div class="item three"></div>
        <div class="item four"></div> 
        <div class="item five"></div> 
        <div class="item six"></div> 
        <div class="item seven"></div>        
    </div>

         
             <div ref="box" class="box" >
                <span class="bd" ref="keys" v-for="i in 50 " :key="i" ></span>
           
            
             </div>
            
            </div>

            <div class="tt" v-show="Isgc" >
                <span class="gc" ref="gc" >{{ musicgc }}</span>
                    <span class="gc2" ref="gcs"  >{{ muiscgctow }}</span>
            </div>
                 
            <div class="but">
                <img @click="gohome" src="../../static/home.png" alt="">
                <img @click="setdrawer" src="../../static/liuyian.png" alt="">
                <img @click="addgood" src="../../static/love.png" alt="">
               
               
                <img @click="dowlmusic" src="../../static/dowan.png" alt="">
                
            </div>

            <el-drawer v-model="drawer" title="评论" :with-header="false">
               <musicPr></musicPr>


            </el-drawer>
            
        </div>
    </div>
</template>

<script setup>
   import {onMounted, ref,onUnmounted } from "vue"
   import {useRoute,useRouter} from "vue-router"
   import { Howl, Howler } from 'howler';
   import request from "../../htpps/request";
   import { ElMessage } from 'element-plus'
   import musicPr from "./muiscPr.vue"
    import {listone,musicgood,addmiuscdowl} from "../../htpps/indexs"
    const route =useRoute()
    const router =useRouter()
    const Isgc=ref(false)

// 评论
const drawer = ref(false)

const setdrawer=()=>{
    drawer.value=!drawer.value
}


// 下载音乐
const dowlmusic=async ()=>{
      // 创建一个<a>元素
        var downloadLink = document.createElement('a');
            // 设置下载链接的href属性为音乐文件的URL
            console.log("下载路径","api"+data.value.url);
            downloadLink.href ="api"+data.value.url;
            // 设置下载链接的下载属性为true，这将强制浏览器下载链接的内容
            downloadLink.download = data.value.url;
            // 将链接添加到页面中
            document.body.appendChild(downloadLink);
            // 模拟点击下载链接
            downloadLink.click();
            // 完成后移除链接
            document.body.removeChild(downloadLink);
            ElMessage({
                message: '正在下载.',
                type: 'success',
                plain: true,
            })

           await addmiuscdowl(route.query.id)
}
    const data=ref({
        title:"",   //标题
        lrc:[], //歌词
        id:route.query.id,//
        muisc:"",   //歌对象
        time:0,    //当前时间
        Isbf:"" ,//播放状态
        url:"",//歌曲地址
        endtime:"",//总时间
        index:0,//当前音乐下标
        imgurl:""//封面


    })

    // ****************点赞

    const addgood=()=>{
        musicgood(route.query.id).then(res=>{
            ElMessage({
    message: '感谢点赞',
    grouping: true,
    type: 'success',
  })
        })
    }

    // *****************

    function timeis(time) {
        const [minutes, seconds] = time.split(':').map(parseFloat);
        const totalSeconds = minutes * 60 + seconds;
        return  Math.ceil(totalSeconds);
        }
    const  setdata=async ()=>{
        let a=await listone(route.query.id)
        


        data.value.title=JSON.parse(a.muiscTile)
        data.value.url=a.muiscUrl
        data.value.imgurl=await request.img(a.sareUrl)
     
        data.value.lrc=JSON.parse(a.musicTimedesc).map(item=>{
            item.time=timeis(item.time)
          
            return item
        })
     


        data.value.muisc=  new Howl({
                            src: ['api'+  data.value.url],
                            // 在音频加载完成后获取总时长
                            onload: ()=>{
                            
                               data.value.endtime = data.value.muisc.duration();
                                let a=0;
                                
                               for(let i =0;i<data.value.lrc.length;i++)
                                {
                                    if(i+1==data.value.lrc.length)
                                    {   
                                        data.value.lrc[i].statime=Math.ceil(data.value.endtime-data.value.lrc[i].time)
                                    }
                                    else
                                    {
                                        data.value.lrc[i].statime=Math.ceil(data.value.lrc[i+1].time-data.value.lrc[i].time)
                                    }

                                    a+= data.value.lrc[i].statime
                                }
                                console.log("总时间",a,data.value.endtime-18);

                            },

                            // 监听播放事件以获取当前时间开始
                            onplay: function() {
                                
                               let a= setInterval(()=> {  
                               data.value.time =data.value.muisc.seek();
                             
                              
                               if(Math.round(data.value.time)==Math.round(data.value.lrc[0].time)&&!Isgc.value)
                               {


                                // 开始显示歌词
                                
                           
                                
                                Isgc.value=true
                                // clearInterval(a)
                                musicgc.value=data.value.lrc[0].text
                                muiscgctow.value=data.value.lrc[0].text2

                                tiantion(data.value.lrc[0].statime,data.value.index) 
                           

                               }


                                }, 500); // 每秒更新一次当前时间
                            },
                            onend: function() {
                                    console.log('音频播放结束');
                                    // 在这里可以执行一些结束后的操作
                                    gohome()
                                }
                            });
        console.log(data.value);
             data.value.muisc.play();
    }

    const gohome=()=>{
        router.push("/share")
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
// *********************标题歌词展示
 // *****************************
 
// *********************随机节点
const gc=ref()
    const gcs=ref()
const box=ref()
    const keys=ref([])
    const getpx=( node)=>{
        var containerWidth = window.innerWidth;
        var containerHeight = window.innerHeight;
   
        var nodeWidth = node.offsetWidth;
        var nodeHeight = node.offsetHeight;

        var randomX = Math.floor(Math.random() * (containerWidth - nodeWidth));
        var randomY = Math.floor(Math.random() * (containerHeight - nodeHeight));
       
        node.style.left = randomX + 'px';
        node.style.top = randomY + 'px';
        node.style.opacity=1
        const rect = node.getBoundingClientRect();
       
        let time=(Math.random() * 4) + 1
        let times=time*1000
        node.style.transition=`all ${time}s`;
        node.style.transform=`rotate(${Math.floor(Math.random() * 180)}deg)`;
        node.style.left =rect.left+  Math.floor(Math.random() * 186)+ 'px';
        node.style.top = rect.top  + Math.floor(Math.random() * 186)+'px';
       
      
        setTimeout(()=>{
            
            node.style.opacity=0
            node.style.transition="none";
            getpx(node)
        },times)


    }
   
    const startbd=()=>{
        box.value.style.opacity=0
        keys.value.forEach((item,index)=>{
          getpx(item)

            if(index==keys.value.length-1)
            {
             
               setTimeout(()=>{
                box.value.style.opacity=1
               },6000)
           
            }

        })
    }
// ********************



// 动画s

const utilmusic=(a,b,time)=>
{
            a.style.transition= "all .1s";
            b.style.transition= "all .1s";
            a.style.transform=" translateY(0%)"
            b.style.transform=" translateY(0%)"
            a.style.opacity=1
            b.style.opacity=1
            setTimeout(() => {
              

                a.style.transition= "none"; 
                b.style.transition= "none"
                
                a.style.transform=" translateY(100%)"
                b.style.transform=" translateY(100%)"
                a.style.transition= "all .1s";
                b.style.transition= "all .1s";
                a.style.opacity=0
                b.style.opacity=0
                data.value.index+=1     
             
                if(data.value.lrc.length==data.value.index)
                    {
                        return
                    }
                   
                setTimeout(()=>{

                    
                    tiantion(data.value.lrc[data.value.index].statime-0.1,data.value.index)
                    musicgc.value=data.value.lrc[data.value.index].text

               
                    muiscgctow.value=data.value.lrc[data.value.index].text2
                    // console.log("当前下标",data.value.index,data.value.lrc[data.value.index].text2,muiscgctow.value);

                },100)
            }, time*1000);
           
}

const musicgc=ref("歌词")
const muiscgctow=ref("yinwen")
// 开始表演
    const tiantion=(time)=>{
    
            let a=gc.value
            let b=gcs.value
            utilmusic(a,b,time)
          
         
    
    }

    onMounted(()=>{
        startbd()

     

      setdata()
    })
    onUnmounted(()=>{
        data.value.muisc.stop()
  })
</script>

<style  scoped>
.but{
    position: fixed;
    width: 35%;
    left: 50%;
    min-width:800px;
    transform: translateX(-50%);
    display: flex;
    height: 50px;
    justify-content: space-between;

    align-items: center;
    top: 75%;
}
.but>img
{
    width: 50px;
    height:50px;
}
.ys1{
    opacity: 0;
 
}
.ys2{
    opacity: 1;
    color: #FFFFFF;
   
}
.tt{
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translateX(-50%);
    display: flex;
  flex-direction: column;
    font-family: Mygeci,Arial,  sans-serif;
 
}
.gc{
    color: #FFFFFF;
    font-size: 3.5em;
    width: 100vw;
 
    letter-spacing: 30px; 
    line-height: 100px;
    font-family: MyCustomFont, Arial, sans-serif; 
   
    text-align: center;
   
}
@keyframes admin{
    0%{
    
        transform: translateY-(100%);
     
    }
    90%{
      
        transform: translateY(0);
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateY(100%);
    }
}
.gc2{
    color: #FFFFFF;
    font-size: 3.5em;
    line-height: 100px;
    width: 100vw;
    font-family: MyCustomFont, Arial, sans-serif; 
   
    text-align: center;
}
.muiic_gc{
  
}
.music-pege{

    width: 100vw;
    height: 100vh;
    min-width: 1980px;
    min-height: 1080px;
    position: fixed;
    background: black;
    z-index: 0;
    top: 0;
    left: 0;
    background-size: 100% 100%;

}

@keyframes example {
  0% { opacity: 1; }
  80%{opacity: .7;}
  100% { /* 结束状态 */ display: none; opacity: 0;}
}
.bd{
    width: 10px;
    height: 3px;
 
    border-radius: 50%;
    background: #FFFFFF;
    position: absolute;
    top: 10px;
    left: 10px;
    transition: all 2s;
  opacity: 0;
    /* animation: example .8s forwards;  */
}

.img{
    width: 115%;
    min-height: 100%;
    margin: auto;
    animation: moveLeftRight 100s linear infinite alternate;
    top: 0;
 
    position: absolute;
    z-index: 1;
}
.zz{
    width: 100vw;
    height: 100vh;
    z-index: 2;
    min-width: 1980px;

    position: absolute;
    top: 0;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
  

}
.tile{
    
    display: block;
    font-family: MyCustomFont, Arial, sans-serif; 
   
    letter-spacing: 50px; 
    font-size: 6em;
   
    transition: all .3s;
    line-height: 100px;
}
.tile2{
    display: block;
    font-family: MyCustomFont, Arial, sans-serif; 
    letter-spacing: 10px; 
    font-size: 3em;

    transition: all .3s;
}
.music{
   
    position: absolute;
    top: 50px;
    left: 200px;
}
@keyframes moveLeftRight {
        0% {
            left: -15%;
        }
    50% {
            left: 0%;
        }
        100%
        {
            left: -15%;
        }
       
    }

    .item {
            position: absolute;
            width: 8px;
            border-radius: 6px;
            background-color: #1f94ea;
           
        }  

         .ones{
          
            transform: translateX(-80px);
        }
         .music .one {
            height: 18px;
            transform: translateX(-60px);
        }



        .music .two {
            height: 53px;
            transform: translateX(-40px);
        }
        .music .three {
            height: 36px;
            transform: translateX(-20px);
        }
        .music .four {
            height: 70px;
            transform: translateX(0);
        }

        .music .five {
            height: 30px;
            transform: translateX(20px);
        }

        .music .six {
            height: 40px;
            transform: translateX(40px);
        }
        .music .seven {
            height: 50px;
            transform: translateX(60px);
        }
        @keyframes radius-animation {
            100% {
                height: 10px;
                border-radius: 50%;
                filter: contrast(2);
            }
        }
        .ones {  
            height: 62px;
            animation: radius-animation .3s ease;
        }
        .music .one {
            animation: radius-animation .3s ease;
        }
        .music .two {
            animation: radius-animation .6s ease;
        }
        .music .three {
            animation: radius-animation .57s ease;
        }
      .four {
            animation: radius-animation .52s ease;
        }
      .five {
            animation: radius-animation .4s ease;
        }
     .six {
            animation: radius-animation .3s ease;
        }
      .seven {
            animation: radius-animation .7s ease;
        }
        .music .item {
            animation-iteration-count: infinite; 
            -webkit-animation-iteration-count: infinite; 
            animation-direction: alternate;
            -webkit-animation-direction: alternate; 
       }

</style>