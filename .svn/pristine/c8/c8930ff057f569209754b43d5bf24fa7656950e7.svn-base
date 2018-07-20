<template>
  <div class="alipay-account">
    <x-header class="header" :left-options="{backText: ''}">支付宝账户</x-header>
    <group class="basic-info">
      <x-input title="支付宝账户" label-width="6em" v-model="form.alipayAccountNum" placeholder="请输入真实支付宝账户"></x-input>
      <x-input title="姓名" label-width="6em" v-model="form.name" placeholder="请输入真实姓名"></x-input>
    </group>
    <x-button class="basic-btn" type="warn" @click.native="save()">保存</x-button>
  </div>
</template>

<script>
  import { Group, XInput, XButton, XHeader } from 'vux'

  export default {
    name: 'alipay-account',
    components: {Group, XInput, XButton, XHeader},
    data () {
      return {
        form: {
          alipayAccountNum: '',
          name: ''
        }
      }
    },
    created () {
      if (this.$route.query.alipayAccountNum) {
        this.form.alipayAccountNum = this.$route.query.alipayAccountNum
      }
    },
    methods: {
      save: function () {
        if (!this.form.alipayAccountNum){
          this.$vux.toast.text('请输入支付宝帐号')
          return
        }
        if (!this.form.name){
          this.$vux.toast.text('请输入支付宝姓名')
          return
        }
        this.$store.dispatch('bandAlipay', this.form).then(res => {
          if (res.data.code === '200') {
            console.log(res.data)
            this.$vux.toast.text('绑定成功')
            this.$router.go(-1)
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .alipay-account {
    background: #f1f1f1;
    padding: 45px 0;
  }

  .header {
    background: #d86372;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .basic-btn {
    width: 80%;
    margin: 30px auto;
  }

  .weui-btn_warn {
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

