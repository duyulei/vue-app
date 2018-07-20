import axios from 'axios'

export default {
  state: {
    retrieve: {
      phone: ''
    }
  },
  mutations: {
    setAccountPhoneInfo (state, phone) {
      state.retrieve.phone = phone
    }
  },
  actions: {
    getAccountInfo ({commit}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/setting',
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
          if (response.data.code === '200') {
            commit('setAccountPhoneInfo', response.data.data.mobileNo)
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
    checkMobile ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/check/mobile',
          method: 'post',
          data: {
            mobileNo: form.phone,
            mobileCaptcha: form.phoneCaptcha,
            imgCaptcha: form.imageCaptcha
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
    modifyMobile ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/modify/mobile',
          method: 'post',
          data: {
            mobileNo: form.phone,
            mobileCaptcha: form.phoneCaptcha,
            imgCaptcha: form.imageCaptcha
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
    modifyPassword ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/user/password/modify',
          method: 'post',
          data: {
            oldPassword: form.oldPassword,
            newPassword: form.newPassword,
            confirmNewPassword: form.rePassword
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
    }
  }
}
