import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    //  投递职位列表
    getDeliveryList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/delivery/position/list',
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
    //  被查看记录列表
    getBeViewedList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/be/see/record/list',
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
    //  被购买记录列表
    getPayViewedList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/be/pay/record/list',
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
    //  屏蔽企业列表
    getShieldList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/shield/list',
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
    //  取消屏蔽企业
    cancelShield ({commit}, shieldId) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/cancel/shield',
          method: 'post',
          data: {
            shieldId: shieldId
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
    //  添加屏蔽企业
    shieldCompany ({commit}, companyName) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/shield/company',
          method: 'post',
          data: {
            companyName: companyName
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
    //  绑定邮箱
    bindEmail ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/bind/email',
          method: 'post',
          data: {
            email: form.email,
            captcha: form.emailCaptcha
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
    //  更改邮箱
    resetBindEmail ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/bind/new/email',
          method: 'post',
          data: {
            oldEmail: form.oldEmail,
            oldCaptCha: form.oldPhoneCaptcha,
            newEmail: form.email,
            newCaptCha: form.phoneCaptcha
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
    //  收提记录
    getMoneyList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/income/expense/record/list/query',
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
    //  收提记录详情
    getFundDetail ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/income/expense/record/detail',
          method: 'post',
          data: {
            recordId: form.recordId,
            accountId: form.accountId
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
    //  支付宝微信帐号
    getCashAccount ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/third/party/account/num',
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
    //  支付宝绑定
    bandAlipay ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/alipay/bind',
          method: 'post',
          data: {
            alipayAccountNum: form.alipayAccountNum,
            name: form.name
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
    //  解除支付宝绑定
    relieveBandAlipay ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/relieve/alipay/bind',
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
    //  支付宝提现
    withdrawAlipay ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/withdraw/money/by/alipay',
          method: 'post',
          data: {
            money: form.money
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
