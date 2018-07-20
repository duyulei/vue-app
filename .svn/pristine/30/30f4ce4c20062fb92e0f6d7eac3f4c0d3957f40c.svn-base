import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    //  获取企业列表
    getCompanyList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: 'https://www.t021.top/company/company/list',
          method: 'post',
          data: {
            page: form.page,
            size: form.size,
            recruitDiv: form.recruitDiv
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  获取首页职位列表
    getHoPosList ({commit}, form) {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/position/home/list',
          method: 'post',
          data: {
            workCity: form.workCity,
            edu: form.education,
            positionName: form.positionName,
            more: form.more,
            page: form.page,
            size: form.size,
            recruitDiv: form.recruitDiv
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  获取首页安排列表
    getHoArrList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/arrange/home/list',
          method: 'post',
          data: {
            city: form.city,
            companyId: form.companyId,
            school: form.school,
            time: form.time,
            more: form.more,
            page: form.page,
            size: form.size,
            recruitDiv: form.recruitDiv
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  企业home页
    getCompanyHome ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/company/detail/home',
          method: 'post',
          data: {
            compyId: form.compyId,
            recruitDiv: form.recruitDiv
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  获取详情职位列表
    getComPosition ({commit}, form) {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/position/detail/list',
          method: 'post',
          data: {
            recruitDiv: form.recruitDiv,
            companyId: form.compyId,
            workplace: form.workplace
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  获取详情宣讲会列表
    getArrPosition ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/home/company/detail/arrange/list',
          method: 'post',
          data: {
            recruitDiv: form.recruitDiv,
            companyId: form.compyId
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  获取职位详情
    getComPositionDetail ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: axios.defaults.baseURL2 + '/position/detail',
          method: 'post',
          data: {
            positionId: form.positionId
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  申请职位
    goToApply ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/post/applied',
          method: 'post',
          data: {
            positionId: form.positionId
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
//  是否申请职位
    isApply ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/is/delivered',
          method: 'post',
          data: {
            positionId: form.positionId
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
          if (response.data.code === '200') {
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    }
  }
}
