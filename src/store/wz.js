import request  from "../htpps/request";

export default {
    namespaced: true,
    state: {

        // 数据
        Isuserdata:false,
        userdata:{
          
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