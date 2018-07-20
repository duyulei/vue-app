<template>
  <div class="model-title">
    <div class="title">
      <i class="iconfont icon-wode"></i>
      <div><i class="iconfont" :class="fontClass"></i>{{ title }}</div>
      <i class="iconfont icon-home"></i>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
  export default {
    name: 'model-title',
    data () {
      return {
      }
    },
    props: {
      title: String,
      fontClass: String
    }
  }
</script>

<style scoped>
  .model-title {
    height: 60px;
    background-color: #F1F1F1;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    flex-direction: column;
    display: none;
  }

  .title {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .title > i {
    font-size: 36px;
    line-height: 36px;
    color: #E5E5E5;
    margin-left: 10px;
    margin-right: 10px;
  }

  .title div {
    font-size: 17px;
    line-height: 36px;
    width: 120px;
    height: 36px;
    text-align: center;
    background-color: #E5E5E5;
    border-radius: 18px;
  }

  .title > div > i {
    margin-right: 8px;
    line-height: 18px;
    color: #878787;
  }

  .model-title .bg {
    width: 70%;
    display: inherit;
    height: 2px;
    background-color: #E5E5E5;
  }
</style>
