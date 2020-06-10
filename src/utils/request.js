//基于axios做的一个封装，用来实现网络请求工具

//1。引入axios

import axios from 'axios'
import store from '../store'
import {Toast} from 'vant'


console.log(store,111111111111111)
//2.创建axios的实例对象
const resquest = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 15000
})

//3在这里我们还可以实现一些拦截的功能
//3.0请求拦截
resquest.interceptors.request.use(confing =>{
  console.log(confing,123)
  console.log(store.state.loading.isShow)
  store.state.loading.isShow = true;
  return confing
})


//3.1 响应拦截
//3.1.1直接将response.date给返回出去，以方便外面调用时还得.data
resquest.interceptors.response.use(response =>{
  //请求成功，将response.data返回出去
  store.state.isShow = false;
  
  return response.data
},
error => {
  //请求失败
  Toast('网路异常，请稍后重试')
  return Promise.reject(error)
 }
)

//4.将实例暴露出去
export default resquest;