import request  from "../htpps/request";

export default {
    namespaced: true,
    state: {

        // 数据
        Isuserdata:false,
        userdata:{
          "id": 1,
          "name": "LiWan",
          "userName": "admin",
          "passwrod": "123",
          "userImg": "ba589dab-dd5f-48e3-a559-33618d0851a41114772b-4faf-4ded-a039-05927cb79dbf_1706001026270.png",
          "userQq": "2825424566",
          "userGitte": "https://gitee.com/musicic",
          "userGithub": "https://github.com/Musicys",
          "userCsdn": "https://i.csdn.net/#/user-center/profile?spm=1000.2115.3001.5111",
          "usernames": "Music",
          "userIntroductory": " 我是一名富有创造力的Web开发者，专注于设计和构建精美、高效的网站。通过运用HTML、CSS和JavaScript等前端技术，我能够打造出令人印象深刻的用户界面和流畅的交互体验。\n\n我对设计和用户体验有着极高的敏感度，注重细节并追求完美。我善于将客户的愿景转化为现实，通过独特的创意和灵感，为他们提供令人赞叹的网页设计。\n\n我熟练掌握多种前端框架和库，如React、Angular和Vue.js，能够利用它们加速开发过程并提供更好的用户体验。同时，我还深入了解后端开发，能够以Node.js、Python(Django/Flask)或Ruby on Rails等为基础构建强大的服务器端逻辑和数据管理。\n\n我明白网站的响应式设计的重要性，在不同的设备和屏幕尺寸下，确保网站美观而流畅地呈现。我的目标是为用户提供一种无论在何时何地都能愉悦地浏览网站的体验。\n\n除了技术方面的知识和技能，我还注重与客户的良好沟通和合作。我善于倾听客户需求，并根据他们的期望和要求提供个性化的解决方案。\n\n总而言之，作为一名Web开发者，我致力于创造出优雅、功能强大且具有吸引力的网站。我的目标是通过我的技术和创意，为用户带来出色的Web体验，提升品牌形象并满足业务需求。",
          "userMesg": "在繁忙的时光中停留，感受微风在指尖轻拂；在寂静的夜晚里，倾听星辰的低语；生命是一段奇妙旅程，让快乐和梦想相伴；放飞心灵的翅膀，翱翔在自由的天空；微笑是阳光，温暖心灵的花朵。",
          "createTime": "2024-02-02T15:40:20",
          "updateTime": "2024-05-03T13:17:12",
          "userZy": "前端开发者",
          "userZyimg": "ba589dab-dd5f-48e3-a559-33618d0851a41114772b-4faf-4ded-a039-05927cb79dbf_1706001026270.png",
          "userLybimg": "ba589dab-dd5f-48e3-a559-33618d0851a41114772b-4faf-4ded-a039-05927cb79dbf_1706001026270.png",
          "userLimg": "ba589dab-dd5f-48e3-a559-33618d0851a41114772b-4faf-4ded-a039-05927cb79dbf_1706001026270.png"
        }
      },
      mutations: {
    // 修改
        setusedata(state,play)
        {
            state.userdata=play
            state.Isuserdata=true
         
          
        }
    
      },
      actions: {
        // 请求
     async  getusedata({commit})
        {
           
           commit("setusedata",await request.get("/user"))
            
            
         
            // commit("setusedata","")
    
    
        }
      },
      getters: {
        more20stu (state, getters) { 
            
            return state.userdata
        
        
        }
      }
}