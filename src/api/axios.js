import axios from "axios";
import store from '../store/index';

// /store/index.js
// 设置请求地址
// 封装axios使用类
class HttpRequest {
  constructor() {
    // 将地址保存到原型上
    this.url = 'http://localhost:3001';
    // 请求的储存栈
    // 可以理解为，路由后缀存放处
    this.queue = {}
  };

  getInsideConfig() {
    // 调用函数传入地址，数据存放处
    const config = {
      baseURL: this.url,
      headers: {}
    }
    return config;
  };
  // 删除url
  distroy(url) {
    delete this.queue[url]
    // 当请求数据全部执行完毕后将login效果关闭
    if (!Object.keys(this.queue).length) {
      store.commit('changeloading', false)
    }
  }

  // 处理拦截器
  demand(instance, url) {
    // 请求拦截器的  具体配置 
    // 请求拦截器 和相应拦截器是一个回调函数 
    instance.interceptors.request.use(config => {
      console.log('请求拦截器执行了')
      console.log('config', config)
      //如果请求栈里面什么都没有
      if (!Object.keys(this.queue).length) {
        // 此处没有执行       
        store.commit('changeloading', true)
      }
      // 给axios请求入栈 
      this.queue[url] = true
      console.log('config 请求拦截器基本完成')
      return config
    }, error => {
      console.log('请求拦截器 好像没设置好')
    })

    // 响应拦截器的具体配置 
    instance.interceptors.response.use(res => {
      console.log('以下是响应拦截')
      console.log('res', res)
      this.distroy(url)
      // 我们做axios请求时候 res.data.data.data 
      return res
      // 响应拦截器 全http状态码的错误拦截 
    }, err => {
      console.log('进入响应拦截的错误 状态码的处理中了 ')
      console.log('err err.response', err.response)
      console.log('err 状态码 err.response.status', err.response.status)
      this.distroy(url)
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误我 '
            break
          case 401:
            err.message = '未授权，请登录'
            break
          case 403:
            // 拒绝访问很笼统  
            // 40001  这个用户攻击过我们服务器
            // 40002   没登陆 但是是正常用户
            err.message = '拒绝访问'
            break
          case 404:
            err.message = `请求地址出错`
            break
          case 408:
            err.message = '请求超时'
            break
          case 500:
            err.message = '服务器内部错误'
            break
          case 501:
            err.message = '服务未实现'
            break
          case 502:
            err.message = '网关错误'
            break
          case 503:
            err.message = '服务不可用'
            break
          case 504:
            err.message = '网关超时'
            break
          case 505:
            err.message = 'HTTP版本不受支持'
            break
          default:
        }
      }

      return Promise.reject(err)
    })
  }
  request(options) {
    // axios创造一个新axios  叫做instance  并发请求需求 
    const instance = axios.create()
    // 将调用的配置和内部的数据getInsideConfig合并参数构造 axios参数
    options = Object.assign(this.getInsideConfig(), options)
    // 调用实例 初始化  请求拦截 响应拦截
    // 第一个参数 新的axios实例  第二个参数是options   url:'/axiosget1',
    // 把请求拦截器 以及响应拦截器 挂在instance这个 axios的实例身上
    this.demand(instance, options.url)
    // 自身拥有复杂的请求拦截器 响应拦截器
    return instance(options)

  }
};
let http = new HttpRequest()
export default http
//  s使用
// getUsername(this.data)
// export const getUsername = (data) => {
//   return axios.request({
//     url: '/axiosget1',
//     method: 'get',
//     params: {
//       a: data
//     }
//   })
// }
