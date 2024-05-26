import reqest from "./request.js"



// 文章点赞
export const good=(id)=>{
    return reqest.get("/desc/wz/addgood?id="+id)

}

// 获取用户信息
export const user=()=>{
    return reqest.get("/radomuser/list")

}

// 评论

import {getuserdata} from "../util/store"
export const porif=(id,title,Issare=false)=>{
    
    if(title=="")
        {
            return
        }

    let a=getuserdata()
  
    let img=a.img
    let name =a.title
    
    let data={}
    if(Issare)
        {
           data={
                "commentDesc":title,
                "sareId":id,
                "img":img,
                "name":name
            }
        }
        else{
            data={
                "commentDesc":title,
                "descId":id,
                "img":img,
                "name":name
            }
        }
   
  

    return reqest.post("/comment/pr/add",data)
}



// 评论列表

export const prList =(data,Issare=false)=>{
        let datas={
            id:data.id,
            page:data.page||1,
            PageSize:data.pageSize||10,
            type:data.type
        }
        
        console.log("type==>",datas);
        return new Promise((req,reson)=>{
            let url="/comment/pr/list"
           if(Issare)
            {
                url="/comment/pr/list/sare"
            }
           
            reqest.get(`${url}?id=${datas.id}&page=${datas.page}&PageSize=${datas.PageSize}&type=${data.type}`).then(res=>{
                
              
            
                req(res)  
            })
        })

}

// 评论点赞
export const prgood=(id)=>{
    return reqest.get("/comment/pr/good?id="+id)

}
// 获取音乐单品
export const listone=(id)=>{
    return reqest.get(`/sare/list/one?id=${id}`)
}
// 音乐评论点赞

export const musicgood=(id)=>{
    return reqest.get("/sare/list/good?id="+id)
    
}
// 文章列表
export const desclist=(data)=>{
    return reqest.get(`/desc/wz/lists?page=${data.page}&pageSize=${data.pageSize}`)

}
// 返回评论数量
export const prnber=(id)=>{
    return reqest.get("/comment/pr/list/count?id="+id)

}

// 标签统计
export const listvalue=(nber)=>{
        return reqest.get("/label/list/value?nber="+nber)

}
// 音乐下载数+1
export const  addmiuscdowl=(id)=>{
    return  reqest.get("/list/dow?id="+id)

}

// 音乐评论数+1
export const musicpladdnber=(id)=>{
    return reqest.get("/comment/pr/list/nber?Id="+id)
    
}

//获取 留言
export const getliuyian=()=>{
    return reqest.get("/message/list")
}
// 获取留言数
export const liunber=()=>{
    return reqest.get("/message/nber")
}


// 添加留言
export const addliuy=(title)=>{
   
    if(title=="")
        {
            return
        }
   
    return reqest.post("/message/add",{
        nr:title
    })
}