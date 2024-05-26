import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求前可以进行一些处理，例如添加请求头、修改请求参数等

    // 示例：在请求头中添加身份验证信息
    config.headers['Authorization'] = localStorage.getItem('token');

    return config;
  },
  error => {
    // 处理请求错误
    // console.error(error);
    return Promise.reject(error);
  }
);


function arrtime(time){
  let dateString =   time
  let date = new Date(dateString);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

}

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 在获得响应数据时可以进行一些处理，例如解析响应数据、错误处理等

    // 示例：打印响应数据

    if(response.data instanceof ArrayBuffer)
    {
      return response.data
    }
 
      if(response.data.data.records)
        {
         try {
          response.data.data.records= response.data.data.records.map(item => {
            if( item.createTime)
              {
                item.createTime= arrtime(item.createTime)
              }
            return item
           })
  
          
         } catch (error) {
          
         }
        }

        // console.log("响应拦截器--》",response.data );/
        return response.data.data;

   
    
 

   
  },
  error => {
    // 处理响应错误
    console.error(error);
    return Promise.reject(error);
  }
);




export default instance;