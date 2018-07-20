<template>
  <div class="certificate-edit">
    <x-header class="header" :left-options="{backText: ''}">证书</x-header>
    <group class="basic-info">
        <datetime class="user-defined" :min-year='1900' title="获得时间" v-model="form.getTime" placeholder="请选择时间"></datetime>
        <popup-picker class="user-defined" title="证书名称" :data="list" :columns="2" v-model="certCodes" @on-change="onChange" show-name placeholder="请选择证书名称"></popup-picker>
        <x-input title="自定义" v-model="form.customName" placeholder="自定义证书名称"></x-input>
        <x-input title="成绩" v-model="form.achievement" placeholder="请填写成绩"></x-input>
    </group>
    <div class="delete-box" v-if="form.skillsCertId">
      <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
    </div>
    <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除证书将无法恢复，你确认删除？</p>
    </confirm>
  </div>
</template>

<script>
  import { Group, XInput, XButton, Datetime, PopupPicker, Confirm, XHeader } from 'vux'

  export default {
    name: 'certificate-edit',
    components: { Group, XInput, XButton, Datetime, PopupPicker, Confirm, XHeader },
    data() {
      return {
        index: '',
        deleteShow: false,
        certResourceList: '',
        list: [],
        format: function (value, name) {
          return `${value[0]}:${value[1]}`
        },
        certCodes: [],
        form: {
          // 证书ID
          skillsCertId: '',
          // 成绩
          achievement: '',
          // 自定义
          customName: '',
          // 获得时间
          getTime: '',
          // 证书Code
          certCode: ''
        }
      }
    },
    created() {
      if (this.$route.query.skillsCertId){
        this.form.skillsCertId = this.$route.query.skillsCertId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.skillsStateValue.skillsCertValueList)
        if (this.$store.state.resume.resume.skillsStateValue.skillsCertValueList[this.index].certCode){
          this.certCodes = this.$store.state.resume.resume.skillsStateValue.skillsCertValueList[this.index].certCodes
        }
        this.form.achievement = this.$store.state.resume.resume.skillsStateValue.skillsCertValueList[this.index].achievement
        this.form.customName = this.$store.state.resume.resume.skillsStateValue.skillsCertValueList[this.index].customName
        this.form.getTime = this.$store.state.resume.resume.skillsStateValue.skillsCertValueList[this.index].getTimeView
        this.form.certCode = this.certCodes[1]
      }
      this.$store.dispatch('getResource').then(res => {
        if (res.data.code === '200') {
          this.certResourceList = res.data.data.certResourceList
          var arr = []
          for (var i = 0; i < this.certResourceList.length; i++) {
            var objParent = {}
            objParent.name = this.certResourceList[i].resourceName
            objParent.value = this.certResourceList[i].resourceCode
            objParent.parent = 0
            arr.push(objParent)
            if (this.certResourceList[i].children) {
              for (var j = 0; j < this.certResourceList[i].children.length; j++) {
                var obj = {}
                obj.name = this.certResourceList[i].children[j].resourceName
                obj.value = this.certResourceList[i].children[j].resourceCode
                obj.parent = this.certResourceList[i].resourceCode
                arr.push(obj)
              }
            }
          }
          this.list = arr
        } else {
          this.$vux.toast.text(res.data.message)
        }
      })
    },
    methods: {
      save: function () {
        if (!this.form.getTime) {
          this.$vux.toast.text('请选择证书获得时间')
          return
        }
        if (!this.form.certCode && !this.form.customName) {
          this.$vux.toast.text('请选择证书或自定义')
          return
        }
        this.$store.dispatch('editCertificate', this.form).then(res => {
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
        this.$store.dispatch('deleteCertificate', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.isLoading = true
            this.$router.go(-1)
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      },
      onChange () {
        this.form.certCode = this.certCodes[1]
      }
    }
  }
</script>

<style scoped>
.certificate-edit{
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
.certificate-edit .weui-input{
  text-align: right;
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
  .certificate-edit .vux-popup-picker-select-box{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 10px;
  }
</style>

