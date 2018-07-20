// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import { ToastPlugin } from 'vux'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'babel-polyfill'
import promise from 'es6-promise'
import './stylus/index.styl'
import VueJsonp from 'vue-jsonp'

promise.polyfill()

Vue.use(ElementUI)
Vue.use(ToastPlugin)
Vue.use(MintUI)
Vue.use(VueJsonp)

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://api.bolego.top/bolego'
// axios.defaults.baseURL = 'http://192.168.0.104:8081/bolego'
axios.defaults.baseURL2 = 'https://api.bolego.top/company'
// axios.defaults.baseURL2 = 'http://192.168.0.106:8088/company'

store.registerModule('vux', {
  state: {
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
})

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  if (from.query.wechatHeader){
    to.query.wechatHeader = true
  }
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  // 配置返回
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  document.title = to.name
  if (localStorage.getItem('accountToken')) {
    next()
  } else if (to.query.userToken && to.query.userToken !== '') {
    store.commit('setAccountToken', to.query.userToken)
    next()
  } else if (to.query.unionid && to.query.unionid !== '') {
    console.log('跳转到绑定页面')
    console.log(to.query.unionid)
    if (to.path !== '/wechat/bind') {
      next({
        path: '/wechat/bind',
        query: {unionid: to.query.unionid}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  } else if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    // 通过vuex state获取当前的token是否存在
    if (from.path === '/') {
      next({
        path: '/recruit'
      })
    } else {
      gotoLoginView(to, from, next)
    }
  } else {
    next()
  }
})

function gotoLoginView (to, from, next) {
  var ua = navigator.userAgent.toLowerCase()
  console.log(ua)
  // 判断是否为微信端
  if (ua.match(/MicroMessenger/i)) {
    axios({
      url: '/get/authorizationUrl',
      method: 'post',
      data: {
        redirectUri: 'https://m.bolego.top' + to.fullPath
      },
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(function (response) {
      if (response.data.code === '200') {
        console.log(response.data.data)
        window.location.href = response.data.data
      }
    })
  } else {
    next({
      path: '/login'  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
}

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('accountToken')) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      // config.headers.Authorization = `${store.state.user.accountToken}`;
      config.data.accountToken = localStorage.getItem('accountToken')
      config.data.requestTime = new Date()
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response) {
      switch (response.data.code) {
        case '401':
          // 返回 401 清除token信息并跳转到登录页面
          store.commit('clearAccountToken')
          var ua = navigator.userAgent.toLowerCase()
          console.log(ua)
          // 判断是否为微信端
          if (ua.match(/MicroMessenger/i)) {
            axios({
              url: '/get/authorizationUrl',
              method: 'post',
              data: {
                redirectUri: 'https://m.bolego.top' + router.currentRoute.fullPath
              },
              transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              }
            }).then(function (response) {
              if (response.data.code === '200') {
                console.log(response.data.data)
                window.location.href = response.data.data
              }
            })
          } else {
            router.push({path: '/login'})
          }
          break
        case '00001':
          router.replace({path: '/userinfo/init'})
          break
        case '00005':
          axios({
            url: '/update/token',
            method: 'post',
            data: {
              accountToken: localStorage.getItem('accountToken')
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
          }).then(function (response) {
            if (response.data.code === '200') {
              store.commit('setAccountToken', response.data.data)
            }
          })
          break
      }
    }
    return response
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
