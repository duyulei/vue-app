<template>
  <div class="train-edit">
    <x-header class="header" :left-options="{backText: ''}">培训经历</x-header>
    <div class="career-time">
      <group class="group-time">
        <datetime :min-year='1900' class="date-left user-defined" format="YYYY-MM" title="培训时间" v-model="form.startTime" placeholder="-请选择-"></datetime>
      </group>
      <group class="group-time">
        <datetime :min-year='1900' class="date-right" format="YYYY-MM" title="至" v-model="form.endTime" placeholder="-请选择-"></datetime>
      </group>
    </div>
    <group class="basic-info">
        <x-input class="user-defined" title="培训课程" v-model="form.trnCourse" placeholder="请填写培训课程"></x-input>
        <x-input title="培训机构"  v-model="form.trnInst" placeholder="请填写培训机构"></x-input>
        <cell title="培训描述"></cell>
        <x-textarea v-model="form.trnDsc" placeholder="请描述你的培训情况"></x-textarea>
        <div class="delete-box" v-if="form.skillsTrnId">
          <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
        </div>
        <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    </group>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除技能培训将无法恢复，你确认删除？</p>
      </confirm>
  </div>
</template>

<script>
  import { Group, XInput, XTextarea, Cell, XButton, Datetime, Confirm, XHeader } from 'vux'

  export default {
    name: 'train-edit',
    components: { Group, XInput, XTextarea, Cell, XButton, Datetime, Confirm, XHeader },
    data() {
      return {
        index: '',
        deleteShow: false,
        form: {
          // 培训ID
          skillsTrnId: '',
          // 结束时间
          endTime: '',
          // 开始时间
          startTime: '',
          // 培训课程
          trnCourse: '',
          // 培训描述
          trnDsc: '',
          // 培训机构
          trnInst: ''
        }
      }
    },
    created() {
      if (this.$route.query.skillsTrnId){
        this.form.skillsTrnId = this.$route.query.skillsTrnId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList)
        this.form.endTime = this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList[this.index].endTime
        this.form.startTime = this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList[this.index].startTime
        this.form.trnCourse = this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList[this.index].trnCourse
        this.form.trnDsc = this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList[this.index].trnDscEdit
        this.form.trnInst = this.$store.state.resume.resume.skillsStateValue.skillsTrnValueList[this.index].trnInst
      }
    },
    methods: {
      save: function () {
        if (!this.form.startTime) {
          this.$vux.toast.text('请选择开始时间')
          return
        }
        if (!this.form.endTime) {
          this.$vux.toast.text('请选择结束时间')
          return
        }
        if (!this.form.trnCourse) {
          this.$vux.toast.text('请填写培训课程')
          return
        }
        this.$store.dispatch('editTrain', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.isLoading = true
            this.$router.go(-1)
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      },
      onConfirm() {
        this.$store.dispatch('deleteTrain', this.form).then(res => {
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
.train-edit{
    background: #f1f1f1;
    padding-top: 45px;
}
.career-time{
  display: flex;
  position: absolute;
  width: 100%;
}
.basic-info{
    padding: 42px 0 120px;
}
.vux-datetime {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
}
.date-left{
  padding-left: 15px;;
}
.date-right{
  padding-right: 15px;;
}
.basic-btn{
    position: fixed;
    bottom: 0;
    border-radius: 0;
}
.group-time{
  flex: 1;
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
.weui-btn_warn{
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
.train-edit .weui-textarea{
  background: #f1f1f1;
  padding:10px;
  min-height:200px;
}
  .train-edit .weui-input{
    text-align: right;
  }
.train-edit .weui-cell_access .weui-cell__ft:after{
  display: none;
}
.train-edit .vux-cell-value {
    font-size: 12px;
}
.vux-x-textarea:before{
  border: none !important;
}
.date-left.weui-cell_access .weui-cell__ft:after{
  display: none !important;
}
.date-right.weui-cell_access .weui-cell__ft:after{
  display: none !important;
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

