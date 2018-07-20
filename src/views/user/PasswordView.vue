<template>
  <div class="password" :class="wechatHeader ? 'wechat-header' : ''">
    <x-header v-if="!wechatHeader" class="header" :left-options="{backText: ''}">密码设置</x-header>
    <group>
      <cell title="修改登录密码" is-link :link="{path:'/user/setting/password/modifypsd'}"></cell>
      <!--<cell title="修改提现密码" is-link :link="{path:'/user/setting/password/modifycash'}"></cell>-->
    </group>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'

  export default {
    name: 'password',
    components: { XHeader, Group, Cell },
    data() {
      return {
        wechatHeader: false
      }
    },
    created() {
      if (this.$route.query.wechatHeader){
        this.wechatHeader = this.$route.query.wechatHeader
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.password{
  background: #f1f1f1;
  padding: 45px 0;
}
.password .weui-cell{
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
