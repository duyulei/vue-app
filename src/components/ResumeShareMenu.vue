<template>
  <div id="resume-share-menu">
    <transition name="slide-fade">
      <div @click.self="close" @touchmove.prevent :value="value" class="bg" v-if="show">
        <div class="menu-list">
          <div @click="select(menu.div)" class="menu-item" v-for="menu in resumeMenu" v-if="menu.has">
            <div class="menu-label">
              <span>{{menu.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      value: false,
      resume: ''
    },
    data() {
      return {
        show: false,
        resumeMenu: [{
          div: 'basicInfoValue',
          name: '基本信息',
          must: true,
          has: false,
          canNotDelete: true
        }, {
          div: 'jobIntentionValue',
          name: '职位意向',
          must: true,
          has: false
        }, {
          div: 'eduBgdValue',
          name: '教育背景',
          must: true,
          has: false
        }, {
          div: 'workExpValueList',
          name: '工作经历',
          must: false,
          has: false
        }, {
          div: 'projExpValueList',
          name: '项目经验',
          must: false,
          has: false
        }, {
          div: 'skillsSpclValueList',
          name: '技能特长',
          must: false,
          has: false
        }, {
          div: 'skillsCertValueList',
          name: '证书',
          must: false,
          has: false
        }, {
          div: 'skillsTrnValueList',
          name: '培训经历',
          must: false,
          has: false
        }, {
          div: 'affixInfoValue',
          name: '附加信息',
          must: false,
          has: false
        }
        ]
      }
    },
    watch: {
      value(val) {
        this.show = val;
      },
      show(val) {
        this.$emit('input', val);
      },
      resume(val) {
        for (let i in this.resume) {
          if (this.resume.hasOwnProperty(i)) {
            for (let index = 0; index < this.resumeMenu.length; index++) {
              if (i === 'workStateValue' || i === 'skillsStateValue') {
                for (let j in this.resume[i]) {
                  if (this.resumeMenu[index].div === j && this.resume[i][j] !== null) {
                    this.resumeMenu[index].has = true;
                  }
                }
              } else if (this.resumeMenu[index].div === i && this.resume[i] !== null) {
                this.resumeMenu[index].has = true;
              }
            }
          }
        }
      }
    },
    methods: {
      close: function () {
        this.show = false;
      },
      select: function (id) {
        this.$emit('select-type', '#' + id);
        this.show = false;
      }
    },
    mounted() {
      if (this.value) {
        this.show = true;
      }
    }
  }
</script>
<style scoped>
  .bg {
    position: fixed;
    left: 0;
    top: 45px;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .menu-list {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    border-left: 1px solid #D86471 !important;
    padding-top: 20px;
    overflow: auto;
    padding-bottom: 45px;
  }

  .menu-item {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height: 45px;
  }

  .menu-item > .menu-label {
    margin-left: 20px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }

  .menu-item > .menu-label > i {
    font-size: 20px;
    color: #D86471;
  }

  .menu-item > .menu-label > span {
    font-size: 16px;
  }

  .menu-item > .btn {
    margin-right: 20px;
    color: #444444;
  }

  .menu-item > .btn > i {
    font-size: 25px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(100%);
  }

</style>
