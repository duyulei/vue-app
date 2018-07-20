import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    //  获取资源
    getResource ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/edit/select/resource',
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
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
    //  获取公司列表
    getCo ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/co/name/for/work/exp',
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
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        })
      })
    },
    //  获取学校资源
    getSchoolResource ({commit}, searchKey) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/school/resource/list/fuzzy/get',
          method: 'post',
          data: {
            searchKey: searchKey
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
//  技能培训编辑
    editTrain ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/trn/add/and/edit',
          method: 'post',
          data: {
            skillsTrnId: form.skillsTrnId,
            endTime: form.endTime,
            startTime: form.startTime,
            trnCourse: form.trnCourse,
            trnDsc: form.trnDsc,
            trnInst: form.trnInst
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
//  技能培训删除
    deleteTrain ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/trb/delete',
          method: 'post',
          data: {
            skillsTrnId: form.skillsTrnId
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
//  其它编辑
    editOther ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/other/add/and/edit',
          method: 'post',
          data: {
            otherId: form.otherId,
            themeDiv: form.themeDiv,
            customName: form.customName,
            themeDsc: form.themeDsc
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
//  其它删除
    deleteOther ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/other/delete',
          method: 'post',
          data: {
            otherId: form.otherId
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
//  证书编辑
    editCertificate ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/cert/add/and/edit',
          method: 'post',
          data: {
            skillsCertId: form.skillsCertId,
            achievement: form.achievement,
            customName: form.customName,
            certCode: form.certCode,
            getTime: form.getTime
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
//  证书删除
    deleteCertificate ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/cert/delete',
          method: 'post',
          data: {
            skillsCertId: form.skillsCertId
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
//  技能特长编辑
    editSkill ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/spcl/add/and/edit',
          method: 'post',
          data: {
            skillsSpclId: form.skillsSpclId,
            skillMastery: form.skillMastery,
            customName: form.customName,
            skillsCode: form.skillsCode
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
//  技能特长删除
    deleteSkill ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/spcl/delete',
          method: 'post',
          data: {
            skillsSpclId: form.skillsSpclId
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
//  工作经历编辑
    editCareer ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/work/exp/add/and/edit',
          method: 'post',
          data: {
            workExpId: form.workExpId,
            coName: form.coName,
            coNature: form.coNature,
            department: form.department,
            endTime: form.endTime,
            industryCode: form.industryCode,
            jobAchv: form.jobAchv,
            jobContent: form.jobContent,
            lnasset: form.lnasset,
            positionName: form.positionName,
            startTime: form.startTime,
            jobTypeDiv: form.jobTypeDiv
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
//  工作经历删除
    deleteCareer ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/work/exp/delete',
          method: 'post',
          data: {
            workExpId: form.workExpId
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
//  项目经验编辑
    editProject ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/proj/exp/add/and/edit',
          method: 'post',
          data: {
            projExpId: form.projExpId,
            startTime: form.startTime,
            endTime: form.endTime,
            projName: form.projName,
            projPosition: form.projPosition,
            projFunction: form.projFunction,
            projDsc: form.projDsc,
            projPerformance: form.projPerformance,
            projLink: form.projLink,
            workExpId: form.workExpId
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
//  项目经验删除
    deleteProject ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/proj/exp/delete',
          method: 'post',
          data: {
            projExpId: form.projExpId
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
//  基本资料姓名性别编辑
    editUserName ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/real/name/and/gender/edit',
          method: 'post',
          data: {
            realName: form.realName,
            gender: form.gender
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
//  基本资料信息编辑
    editUserInfo ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/basic/info/edit',
          method: 'post',
          data: {
            birthday: form.birthday,
            cityCode: form.cityCode,
            email: form.email,
            height: form.height,
            nation: form.nation,
            marriageDiv: form.marriageDiv,
            politicsStatus: form.politicsStatus,
            qqNo: form.qqNo,
            weCharNo: form.weCharNo
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
//  头像修改
    editHeader ({commit}, headAddr) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/basic/info/update/head',
          method: 'post',
          data: {
            headAddr: headAddr
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
//  附件编辑
    editAnnex ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/attachment/add/and/edit',
          method: 'post',
          data: {
            attachmentId: form.attachmentId,
            uploadDiv: form.uploadDiv,
            attachmentName: form.attachmentName,
            uploadAddr: form.uploadAddr,
            attachmentDsc: form.attachmentDsc
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
//  附加删除
    deleteAnnex ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/attachment/delete',
          method: 'post',
          data: {
            attachmentId: form.attachmentId
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
//  教育经历编辑
    editEduList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/edu/exp/add/and/edit',
          method: 'post',
          data: {
            eduExpId: form.eduExpId,
            startTime: form.startTime,
            endTime: form.endTime,
            schoolName: form.schoolName,
            major: form.major,
            eduHistoryCode: form.eduHistoryCode,
            schoolJob: form.schoolJob,
            honor: form.honor,
            fieldExp: form.fieldExp
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
//  教育经历删除
    deleteEduList ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/edu/exp/delete',
          method: 'post',
          data: {
            eduExpId: form.eduExpId
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
//  Offer编辑
    editOffer ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/offer/add/and/edit',
          method: 'post',
          data: {
            hightestEduHistoryCode: form.hightestEduHistoryCode,
            offerList: form.offerList
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
//  教育模块添加
    addedu ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/edu/bgd/add',
          method: 'post',
          data: {
            hightestEduHistoryCode: form.hightestEduHistoryCode,
            offerList: form.offerList,
            startTime: form.startTime,
            endTime: form.endTime,
            schoolName: form.schoolName,
            major: form.major,
            eduHistoryCode: form.eduHistoryCode,
            schoolJob: form.schoolJob,
            honor: form.honor,
            fieldExp: form.fieldExp
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
//  编辑求职状态
    editWorkState ({commit}, workState) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/wrok/state/edit',
          method: 'post',
          data: {
            workState: workState
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
//  职位意向编辑
    editJob ({commit}, form) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/job/intention/add/and/edit',
          method: 'post',
          data: {
            expectedIndustryCodes: form.expectedIndustryCodes,
            expectedPositionNames: form.expectedPositionNames,
            cityCodes: form.cityCodes,
            jobTypeDiv: form.jobTypeDiv
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
