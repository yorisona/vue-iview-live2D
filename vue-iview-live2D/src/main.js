// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import _ from 'lodash'
// vuex
import store from './vuex/index'
// 全局变量g
import g from './js/global'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// }) <img v-lazy="/static/img/1.png">
// live2d
import live2d from './components/Component/Live2d.vue'
Vue.config.productionTip = false

// 挂载实例
Vue.prototype.g = g
Vue.prototype.axios = axios
Vue.prototype._ = _  //使用lodash
Vue.prototype.Vue = Vue

Vue.use(iView) //使用iview组件 
Vue.use(VueLazyload)
Vue.use(live2d)

//axios拦截器
axios.defaults.baseURL = '/'
axios.defaults.timeout = 1000000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem('token')
  store.state.dataStatus.isLoding = true
  if (token == null && router.currentRoute.path == '/login') {// 本地无token,不为登录 跳转至登录页面
    router.push('/login')
    console.log('跳转')
  } else {
    if (config.data == undefined) {
      config.data = {
        "token": token
      }
    } else {
      Object.assign(config.data, { "token": token })
    }

  }
  return config
}, function (error) {
  iView.Message.error('请求失败')
  return Promise.reject(error)
})

// 返回结果拦截
axios.interceptors.response.use(function (response) {
  if (response.hasOwnProperty("data") && typeof response.data == "object") {
    if (response.data.code === 998) {// 登录超时 跳转至登录页面
      iView.Message.error(response.data.msg)
      router.push('/login')
      return Promise.reject(response)
    } else {// 成功
      g.loding('/table')
      return Promise.resolve(response)
    }
  } else {
    return Promise.resolve(response)
  }
}, function (error) {
  // 请求取消 不弹出
  if (error.message != '0000') {
    iView.Message.error('请求失败')
  }

  // 请求错误时做些事
  return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
