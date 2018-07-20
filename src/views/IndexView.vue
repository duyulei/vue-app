<template>
  <div class="index-view">
    <keep-alive>
      <router-view @selectFun="select"></router-view>
    </keep-alive>
    <tabbar>
      <tabbar-item :selected="statusSelect===0" link="/home">
        <i slot="icon" class="iconfont icon-icon-f1"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="statusSelect===1" link="/recruit">
        <i slot="icon" class="iconfont icon-zhaopin"></i>
        <span slot="label">求贤榜</span>
      </tabbar-item>
      <tabbar-item :selected="statusSelect===2" link="/user">
        <i slot="icon" class="iconfont icon-seeusero"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'index-view',
    components: {
      Tabbar, TabbarItem
    },
    data () {
      return {
        statusSelect: 0
      }
    },
    methods: {
      select: function(data){
        this.statusSelect = data
      }
    }
  }
</script>

<style scoped>
  .index-view {
    background: #f1f1f1;
  }

  .weui-tabbar {
    position: fixed !important;
    bottom: 0;
  }
</style>
<style>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #d86372 !important;
  }
</style>

