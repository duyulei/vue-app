<template>
  <div class="pay-viewed" :class="wechatHeader ? 'wechat-header' : ''">
    <x-header v-if="!wechatHeader" class="header" :left-options="{backText: ''}">付费查看记录</x-header>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false"
                 ref="loadmore">
    <div class="header-cell">
      <cell-box is-link @click.native="gotoCompany(index)" v-for="(payRecordValue, index) in payRecordValues" :key="index">
        <div class="header-img">
          <img width="100%" :src='payRecordValue.companyLogo'/>
        </div>
        <div class="header-info">
          <p><span class="position-title">{{payRecordValue.companyName}}</span></p>
        </div>
      </cell-box>
    </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import { XHeader, CellBox } from 'vux'
  import { Loadmore, Indicator } from 'mint-ui'

  export default {
    name: 'pay-viewed',
    components: { XHeader, CellBox, 'mt-loadmore': Loadmore, Indicator },
    data() {
      return {
        wechatHeader: false,
        allLoaded: false,
        payRecordValues: [],
        totalPages: '',
        form: {
          page: 0,
          size: '6'
        }
      }
    },
    created() {
      if (this.$route.query.wechatHeader){
        this.wechatHeader = this.$route.query.wechatHeader
      }
      Indicator.open();
      this.init()
    },
    methods: {
      init: function () {
        this.$store.dispatch('getPayViewedList', this.form).then(res => {
          if (res.data.code === '200') {
            console.log(res.data)
            this.payRecordValues = this.payRecordValues.concat(res.data.data.payRecordValues)
            this.totalPages = res.data.data.totalPages
            if (this.form.page === this.totalPages || this.totalPages === 0) {
              this.allLoaded = true// 若数据已全部获取完毕
            } else {
              this.allLoaded = false
            }
            setTimeout(() => {
              if (this.$refs.loadmore) {
                this.$refs.loadmore.onTopLoaded()
              }
              if (this.$refs.loadmore) {
                this.$refs.loadmore.onBottomLoaded()
              }
            }, 1500)
          }
          Indicator.close();
        })
      },
      gotoCompany: function (index) {
        this.$router.push({
          path: '/recruit/company',
          query: {compyId: this.payRecordValues[index].companyId}
        })
      },
      loadTop () {
        this.form.page = 0
        this.payRecordValues = []
        this.init()
      },
      loadBottom () {
        this.form.page++
        this.init()
      }
    }
  }
</script>

<style scoped>
.pay-viewed{
  background: #fff;
  padding: 45px 0;
}
.pay-viewed .weui-cell{
  font-size: 14px;
}
.header-cell{
  border-bottom: 1px solid #eee;
}
.header{
  background: #d86372;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.header-img{
  width: 65px;
  margin-right: 10px;
}
.position-title{
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
  display: inline-block;
}
.position-time{
  position: absolute;
  top: 15px;
  right: 20px;
  color: #ccc;
  font-size: 12px;
}
.position-company{
  font-size: 12px;
}
.position-address{
  margin-right: 10px;
}
.position-salary{
  color: #d86372;
}
</style>
<style>
  .header.vux-header .vux-header-left .left-arrow:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
</style>
