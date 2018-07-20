<template>
  <div class="withdrawals-cash">
    <x-header class="header" :left-options="{backText: ''}">提现</x-header>
    <group class="basic-info">
        <x-input title="提现金额：" @keyup.native="validate()"  v-model="form.money" :placeholder="'当前可提余额' + uM + '元'"></x-input>
    </group>
    <x-button class="basic-btn" type="warn" @click.native="save()">确认</x-button>
  </div>
</template>

<script>
  import { Group, XInput, XButton, XHeader } from 'vux'
  import { Indicator } from 'mint-ui'

  export default {
    name: 'withdrawals-cash',
    components: { Group, XInput, XButton, XHeader, Indicator },
    data() {
      return {
        uM: '0.00',
        form: {
          money: ''
        }
      }
    },
    created() {
      if (this.$route.query.uM){
        this.uM = this.$route.query.uM
      }
      if (this.$route.query.style === '01'){
        if (this.$route.query.alipay === 'false'){
          this.$router.go(-1)
          this.$vux.toast.text('支付宝帐号未绑定')
        }
      } else if (this.$route.query.style === '02'){
        if (this.$route.query.wechat === 'false'){
          this.$router.go(-1)
          this.$vux.toast.text('微信帐号未绑定')
        }
      } else {
        this.$router.replace({path: '/user/fund'})
      }
    },
    methods: {
      validate: function () {
        console.log(12)
        this.form.money = this.form.money.replace(/^[A-z]+$|^[\u4E00-\u9FA5]+$/, '');
        if (this.form.money > this.uM){
          this.form.money = this.uM;
        }
      },
      save: function () {
        var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/
        if (!exp.test(this.form.money)){
          this.$vux.toast.text('请输入正确的金额格式')
          return;
        }
        Indicator.open()
        this.$store.dispatch('withdrawAlipay', this.form).then(res => {
          if (res.data.code === '200') {
            this.$vux.toast.text('提现成功')
            this.$router.replace({
              path: '/user/fund/withdrawals/detail/success',
              query: {money: this.form.money}
            })
            Indicator.close()
          } else {
            this.$vux.toast.text(res.data.message)
            Indicator.close()
          }
        })
      }
    }
  }
</script>

<style scoped>
  .withdrawals-cash{
      background: #f1f1f1;
      padding: 45px 0;
  }
  .withdrawals-cash .weui-cell{
    font-size: 14px;
  }
  .header{
    background: #d86372;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .basic-btn{
      width: 80%;
      margin: 30px auto;
  }
  .weui-btn_warn{
    background: #D86471;
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

