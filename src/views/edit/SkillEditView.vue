<template>
  <div class="skill-edit">
    <x-header class="header" :left-options="{backText: ''}">技能特长</x-header>
    <group class="basic-info">
        <popup-picker class="user-defined" title="技能名称" :data="list" :columns="2" v-model="skillsCodes" @on-change="onChange" show-name placeholder="请选择技能名称"></popup-picker>
        <x-input title="自定义" v-model="form.customName" placeholder="自定义技能名称"></x-input>
        <popup-radio class="user-defined" title="掌握程度" :options="skillMasterys" v-model="form.skillMastery" placeholder="请选择掌握程度"></popup-radio>
    </group>
    <div class="delete-box" v-if="form.skillsSpclId">
      <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
    </div>
    <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除技能特长将无法恢复，你确认删除？</p>
    </confirm>
  </div>
</template>

<script>
  import { Group, XInput, XButton, PopupRadio, PopupPicker, Confirm, XHeader } from 'vux'

  export default {
    name: 'skill-edit',
    components: { Group, XInput, XButton, PopupRadio, PopupPicker, Confirm, XHeader },
    data() {
      return {
        index: '',
        deleteShow: false,
        skillMasterys: [{key: '01', value: '一般'}, {key: '02', value: '良好'}, {key: '03', value: '熟悉'}, {key: '04', value: '精通'}],
        skillsResourceList: '',
        list: [],
        skillsCodes: [],
        form: {
          // 技能特长ID
          skillsSpclId: '',
          customName: '',
          skillMastery: '',
          skillsCode: ''
        }
      }
    },
    created() {
      if (this.$route.query.skillsSpclId){
        this.form.skillsSpclId = this.$route.query.skillsSpclId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.skillsStateValue.skillsSpclValueList)
        if (this.$store.state.resume.resume.skillsStateValue.skillsSpclValueList[this.index].skillsCode){
          this.skillsCodes = this.$store.state.resume.resume.skillsStateValue.skillsSpclValueList[this.index].skillsCodes
        }
        this.form.skillMastery = this.$store.state.resume.resume.skillsStateValue.skillsSpclValueList[this.index].skillMastery
        this.form.customName = this.$store.state.resume.resume.skillsStateValue.skillsSpclValueList[this.index].customName
        this.form.skillsCode = this.skillsCodes[1]
      }
      this.$store.dispatch('getResource').then(res => {
        if (res.data.code === '200') {
          this.skillsResourceList = res.data.data.skillsResourceList
          var arr = []
          for (var i = 0; i < this.skillsResourceList.length; i++) {
            var objParent = {}
            objParent.name = this.skillsResourceList[i].resourceName
            objParent.value = this.skillsResourceList[i].resourceCode
            objParent.parent = 0
            arr.push(objParent)
            if (this.skillsResourceList[i].children) {
              for (var j = 0; j < this.skillsResourceList[i].children.length; j++) {
                var obj = {}
                obj.name = this.skillsResourceList[i].children[j].resourceName
                obj.value = this.skillsResourceList[i].children[j].resourceCode
                obj.parent = this.skillsResourceList[i].resourceCode
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
        if (!this.form.skillsCode && !this.form.customName) {
          this.$vux.toast.text('请选择技能或自定义')
          return
        }
        if (!this.form.skillMastery) {
          this.$vux.toast.text('请填写技能程度')
          return
        }
        this.$store.dispatch('editSkill', this.form).then(res => {
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
        this.$store.dispatch('deleteSkill', this.form).then(res => {
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
        this.form.skillsCode = this.skillsCodes[1]
      }
    }
  }
</script>

<style scoped>
.skill-edit{
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
  .skill-edit .weui-input{
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
  .skill-edit .vux-popup-picker-select-box{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 10px;
  }
</style>

