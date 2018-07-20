import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    //  通知列表列表
    getNoticeList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/notice/list',
          method: 'post',
          data: {
            page: form.page,
            size: form.size
          },
          transformRequest: [function (data) {
            // Do whatever you want to transform the data
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
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
    //  通知列表列表
    clearNoticeRead ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/notice/unread/clear',
          method: 'post',
          data: {
            noticeId: form.noticeId
          },
          transformRequest: [function (data) {
            // Do whatever you want to transform the data
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
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
    //  通知列表列表
    clearAllNoticeRead ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/all/notice/unread/clear',
          method: 'post',
          data: {},
          transformRequest: [function (data) {
            // Do whatever you want to transform the data
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
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    }
  }
}
