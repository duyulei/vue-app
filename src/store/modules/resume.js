import axios from 'axios';

export default {
  state: {
    resume: ''
  },
  mutations: {
    setResume(state, resume) {
      state.resume = resume
    },
    deleteJobIntention(state) {
      state.resume.jobIntentionValue = null
    },
    deleteEduBgd(state) {
      state.resume.eduBgdValue = null
    },
    deleteWorkExp(state) {
      state.resume.workStateValue.workExpValueList = null
    },
    deleteProjExp(state) {
      state.resume.workStateValue.projExpValueList = null
    },
    deleteSkillsSpcl(state) {
      state.resume.skillsStateValue.skillsSpclValueList = null
      if (!state.resume.skillsStateValue.skillsSpclValueList && !state.resume.skillsStateValue.skillsCertValueList && !state.resume.skillsStateValue.skillsTrnValueList) {
        state.resume.skillsStateValue = null
      }
    },
    deleteSkillsCert(state) {
      state.resume.skillsStateValue.skillsCertValueList = null
      if (!state.resume.skillsStateValue.skillsSpclValueList && !state.resume.skillsStateValue.skillsCertValueList && !state.resume.skillsStateValue.skillsTrnValueList) {
        state.resume.skillsStateValue = null
      }
    },
    deleteSkillsTrn(state) {
      state.resume.skillsStateValue.skillsTrnValueList = null
      if (!state.resume.skillsStateValue.skillsSpclValueList && !state.resume.skillsStateValue.skillsCertValueList && !state.resume.skillsStateValue.skillsTrnValueList) {
        state.resume.skillsStateValue = null
      }
    },
    deleteAffixInfo(state) {
      state.resume.affixInfoValue = null
    }
  },
  actions: {
    getResume({commit, state}) {
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
          if (response.data.code === '200') {
            console.debug(response.data.data)
            commit('setResume', response.data.data)
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteJobIntention({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/job/intention/module/delete',
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
            console.debug(response.data.data)
            commit('deleteJobIntention')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteEduBgd({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/edu/bgd/module/delete',
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
            console.debug(response.data.data)
            commit('deleteEduBgd')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteWorkExp({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/work/exp/delete/all',
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
            console.debug(response.data.data)
            commit('deleteWorkExp')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteProjExp({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/proj/exp/delete/all',
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
            console.debug(response.data.data)
            commit('deleteProjExp')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteSkillsSpcl({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/spcl/module/delete',
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
            console.debug(response.data.data)
            commit('deleteSkillsSpcl')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteSkillsCert({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/cert/module/delete',
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
            console.debug(response.data.data)
            commit('deleteSkillsCert')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteSkillsTrn({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/skills/trn/module/delete',
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
            console.debug(response.data.data)
            commit('deleteSkillsTrn')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    deleteAffixInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/resume/affix/info/module/delete',
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
            console.debug(response.data.data)
            commit('deleteAffixInfo')
          }
          resolve(response)
        }).catch(function (response) {
          reject(response)
        });
      })
    }
  }
}
