<template>
  <div class="withdrawals">
    <x-header class="header" :left-options="{backText: ''}">选择提现</x-header>
    <group>
      <cell title="支付宝提现" is-link :link="{path:'/user/fund/withdrawals/detail?style=01&alipay=' + this.$route.query.alipay + '&uM=' + this.$route.query.uM}"></cell>
      <!-- <cell title="微信提现" is-link :link="{path:'/user/fund/withdrawals/detail?style=02&wechat=' + this.$route.query.wechat}"></cell> -->
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'

  export default {
    name: 'withdrawals',
    components: { XHeader, Group, Cell },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
.withdrawals{
  background: #f1f1f1;
  padding: 45px 0;
}
.withdrawals .weui-cell{
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
