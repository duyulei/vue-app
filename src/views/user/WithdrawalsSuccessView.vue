<template>
  <div class="withdrawals">
    <x-header class="header" :left-options="{showBack: false}">提现结果</x-header>
    <div class="header-img">
      <img width="70px" height="70px" src="../../assets/success.png"/>
      <h2>提现申请已提交</h2>
      <p>预计到帐时间：{{time}}</p>
    </div>
    <group>
      <cell title="提现金额" :value="money + ' 元'"></cell>
    </group>
    <x-button class="basic-btn" type="warn" @click.native="save()">完成</x-button>
  </div>
</template>

<script>
  import { XHeader, Group, Cell, XButton } from 'vux'

  export default {
    name: 'withdrawals',
    components: { XHeader, Group, Cell, XButton },
    data() {
      return {
        money: '0:00',
        time: ''
      }
    },
    created() {
      if (this.$route.query.money){
        this.money = this.$route.query.money
      }
      this.getTime()
    },
    methods: {
      save: function () {
        this.$router.go(-2)
      },
      getTime: function getNowFormatDate() {
        var date = new Date(Date.parse(new Date()) + 7200000)
        console.log(date)
        var seperator1 = '-'
        var seperator2 = ':'
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        var hours = date.getHours()
        var minutes = date.getMinutes()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        if (hours >= 1 && hours <= 9) {
          hours = '0' + hours
        }
        if (minutes >= 0 && minutes <= 9) {
          minutes = '0' + minutes
        }
        this.time = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + hours + seperator2 + minutes
      }
    }
  }
</script>

<style scoped>
.withdrawals{
  background: #fff;
  padding: 45px 0;
}
.withdrawals .weui-cell{
  font-size: 14px;
}
.header-img{
  margin: 50px 0;
  text-align: center;
}
.basic-btn {
    width: 80%;
    margin: 30px auto;
}
.weui-btn_warn {
    background: #D86471;
}
.header{
  background: #d86372;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
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
