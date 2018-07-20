<template>
  <div class="other-edit">
    <x-header class="header" :left-options="{backText: ''}">其它</x-header>
    <group class="basic-info">
        <popup-radio class="user-defined"  title="主题名称" :options="themeNames" v-model="form.themeDiv" placeholder="请选择主题名称"></popup-radio>
        <x-input title="自定义"  v-model="form.customName" placeholder="自定义主题名称"></x-input>
        <cell class="user-defined"  title="主题描述"></cell>
        <x-textarea placeholder="请填写描述内容" v-model="form.themeDsc"></x-textarea>
    </group>
    <div class="delete-box" v-if="form.otherId">
      <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
    </div>
    <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除其它模块将无法恢复，你确认删除？</p>
    </confirm>
  </div>
</template>

<script>
  import { XHeader, Group, XInput, XButton, Cell, XTextarea, Confirm, PopupRadio } from 'vux'

  export default {
    name: 'other-edit',
    components: { XHeader, Group, XInput, XButton, Cell, XTextarea, Confirm, PopupRadio },
    data() {
      return {
        index: '',
        deleteShow: false,
        themeNames: [
          {
            key: '01',
            value: '兴趣爱好'
          }, {
            key: '02',
            value: '职业目标'
          }, {
            key: '03',
            value: '特殊技能'
          }, {
            key: '04',
            value: '社会活动'
          }, {
            key: '05',
            value: '推荐信'
          }
        ],
        form: {
          // 其它ID
          otherId: '',
          // 主题区分
          themeDiv: '',
          // 自定义
          customName: '',
          // 主题描述
          themeDsc: ''
        }
      }
    },
    created() {
      if (this.$route.query.otherId){
        this.form.otherId = this.$route.query.otherId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.affixInfoValue.otherValueList)
        if (this.$store.state.resume.resume.affixInfoValue.otherValueList[this.index].themeDiv){
          this.form.themeDiv = this.$store.state.resume.resume.affixInfoValue.otherValueList[this.index].themeDiv
        }
        this.form.customName = this.$store.state.resume.resume.affixInfoValue.otherValueList[this.index].customName
        this.form.themeDsc = this.$store.state.resume.resume.affixInfoValue.otherValueList[this.index].themeDscEdit
      }
    },
    methods: {
      save: function () {
        if (!this.form.themeDiv && !this.form.customName) {
          this.$vux.toast.text('请选择主题或自定义')
          return
        }
        if (!this.form.themeDsc) {
          this.$vux.toast.text('请填写主题描述')
          return
        }
        this.$store.dispatch('editOther', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.isLoading = true
            this.$router.go(-1)
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      },
      onConfirm () {
        this.$store.dispatch('deleteOther', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.isLoading = true
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
.other-edit{
    background: #f1f1f1;
    padding-top: 45px;
}
.basic-btn{
    position: fixed;
    bottom: 0;
    border-radius: 0;
}
.weui-btn_warn{
  background: #D86471;
}
.delete-box{
  width: 100%;
  position: fixed;
  bottom: 60px;
  border-radius: 0;
}
.delete-btn{
  width: 80%;
  border: 1px solid #D86471;
  color: #D86471;
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
  .other-edit .weui-textarea{
    background: #f1f1f1;
    padding:10px;
    min-height:200px;
  }
  
  .other-edit .weui-input{
    text-align: right;
  }
.vux-x-textarea:before{
  border: none !important;
}
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

