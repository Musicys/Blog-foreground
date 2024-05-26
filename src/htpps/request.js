

import instance  from "./index.js"

export  default{
    instance, 
    header:{
       
        'Content-Type': 'application/json',
      },
    post(url,data,header){

        header=header||this.header
        return this.instance.post(url,data,{header:header})
    },
    get(url,headers)
    {
        let hd=headers||this.header
      
        return this.instance.get(url,{...hd})
    },
    put(url,data,header)
    {
        header=header||this.header 

        return this.instance.put(url,data,{...header})
    },
    delete(url){

        return this.instance.delete(url)
    },
    async img(url)
    {

    
        return new Promise((resolve,reject)=>{
            let arr;
            if(Array.isArray(url)){
    
                arr=[]
    
                
    
                url.forEach((item,index)=>{
                    let response=this.get(`/common/download?name=${item}`,{  responseType: 'arraybuffer'}).then(res=>{
                      
                        const blob = new Blob([res], { type: 'image/jpeg' });
                        const imageURL = URL.createObjectURL(blob);

                        
                        arr.push(imageURL)
                       
                        if(arr.length==url.length){

                            resolve(arr) 

                        }

                    })
                })
               
            }
            else
            {
               this.get(`/common/download?name=${url}`,{ responseType: 'arraybuffer'}).then(res=>{

            
                 
                    
                    const blob = new Blob([res], { type: 'image/jpeg' })
                    const arr = URL.createObjectURL(blob);
                
                    resolve(arr) 
                })

   
               
                
            }
          
        })
    }


}