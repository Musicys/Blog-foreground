const usedata={
    name:"user",
    data:{
        img:"test.png",
        tlite:"名字"
    }
}

import {user} from "../htpps/indexs"
import request  from "../htpps/request"


export const setdata= ()=>{
    
    const a=localStorage.getItem(usedata.name)

    if(a)
        {
            console.log( "A存在",JSON.parse(a));
           


        }
        else{
            user().then(res=>{

               request.img(res.img).then(data=>{

                res.url=data
                localStorage.setItem(usedata.name,JSON.stringify(res))
               })
                
            })
        }
}

export const getuserdata=()=>{
    console.log("返回数据",JSON.parse(localStorage.getItem(usedata.name)));
    
    return JSON.parse(localStorage.getItem(usedata.name))
}