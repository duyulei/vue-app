import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    //  获取简历
    getResumeDetail ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/detail',
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
    },
    //  账户收益
    accountIncome ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/account/income',
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
    },
    //  推荐职位
    recommendPosition ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/position',
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
    //  推荐职位(二)
    recommendPositionOther ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/position/recommend/time/sort',
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
    //  简历完整度
    resumeIntegrity ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/integrity',
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
    },
    //  用户资金
    getUserMoney ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/money',
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
    },
    //  首页通知
    getHomeNotice({commit}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/home/notice',
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
