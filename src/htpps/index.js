import axios from 'axios';

const instance = axios.create({
  baseURL: 'api/',
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

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 在获得响应数据时可以进行一些处理，例如解析响应数据、错误处理等

    // 示例：打印响应数据

    if(response.data instanceof ArrayBuffer)
    {
      return response.data
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