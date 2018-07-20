<template>
  <div class="home-view">
    <x-header class="header" :left-options="{showBack: false}">求贤榜</x-header>
    <div class="home-con">
    <swiper auto>
      <swiper-item><img @click="goCampus1" width="100%" height="100%" src="http://www.bolego.top/static/test2.jpg"/></swiper-item>
      <swiper-item><img width="100%" height="100%" src="http://www.bolego.top/static/test3.jpg"/></swiper-item>
      <swiper-item><img @click="goChengdu" width="100%" height="100%" src="http://www.bolego.top/static/img/bg-1.f1733c6.png"/></swiper-item>
    </swiper>
    <el-row :gutter="6">
      <el-col :xs="12">
        <div class="item-card campus" @click="goCampus1">
          <div class="item-content">
            <div class="img">
              <i style="color: #449d44;font-size:34px;" class="iconfont icon-2"></i>
            </div>
            <span>校园招聘</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="12">
      <div class="item-card chengdu" @click="goCampus2">
        <div class="item-content">
          <div class="img">
            <i style="color: #d86372;font-size:34px;" class="iconfont icon-jianzhi"></i>
          </div>
          <span>全职招聘</span>
        </div>
      </div>
      </el-col>
      <el-col :xs="12">
      <div class="item-card resume" @click="goCampus3">
        <div class="item-content">
          <div class="img">
            <i style="color: #d86372;font-size:34px;" class="iconfont icon-shixi"></i>
          </div>
          <span>实习/兼职</span>
        </div>
      </div>
      </el-col>
      <el-col :xs="12">
      <div class="item-card resume" @click="goCampus4">
        <div class="item-content">
          <div class="img">
            <i style="color: #449d44;font-size:34px;" class="iconfont icon-hehuoren"></i>
          </div>
          <span>合伙人招募</span>
        </div>
      </div>
      </el-col>
    </el-row>
    </div>
    <div class="height-line"></div>
  </div>
</template>

<script>
  import {XButton, XHeader, Swiper, SwiperItem} from 'vux'
  import axios from 'axios'
  export default {
    name: 'home-view',
    components: {XButton, XHeader, Swiper, SwiperItem},
    data() {
      return {}
    },
    created: function () {
      this.$emit('selectFun', 1);
    },
    methods: {
      goCampus1: function () {
        this.$router.push({path: '/recruit/morejob', query: {recruitDiv: '01'}})
      },
      goCampus2: function () {
        this.$router.push({path: '/recruit/morejob', query: {recruitDiv: '02'}})
      },
      goCampus3: function () {
        this.$router.push({path: '/recruit/morejob', query: {recruitDiv: '03'}})
      },
      goCampus4: function () {
        this.$router.push({path: '/recruit/morejob', query: {recruitDiv: '04'}})
      },
      goChengdu: function () {
        if (localStorage.getItem('accountToken')) {
          window.location.href = 'http://home.cdcyl.ol.cc/web-sys-inn'
        } else {
          var ua = navigator.userAgent.toLowerCase();
          console.log(ua)
          if (ua.match(/MicroMessenger/i)) {
            console.log(this.$route.path)
            axios({
              url: '/get/authorizationUrl',
              method: 'post',
              data: {
                redirectUri: this.$route.path
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
            this.$router.push({path: '/login'})
          }
        }
      }
    }
  }
</script>

<style scoped>

  .header{
    background: #d86372;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .home-view {
    padding-top: 45px;
    background: #f1f1f1;
  }
  .home-con{
    padding: 10px;
  }
  .home-con-swiper{
    margin-bottom: 10px;
  }
  .item-card {
    margin-bottom: 6px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-card .item-content {
    text-align: center;
  }


  .item-card .item-content span {
    font-size: 17px;
  }

  .campus {
    background: #FFF;
    background-size: 100% 125px;
  }

  .chengdu {
    background: #FFF;
    background-size: 100% 125px;
  }

  .resume {
    background: #FFF;
    background-size: 100% 125px;
  }


  .home-view .item-card:not(:first-child) {
    margin-top: 20px
  }
  .height-line{
    height: 45px;
  }
  .weui-btn_default {
    width: 200px;
    color: #D86471;
    border: 1px solid #D86471;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
