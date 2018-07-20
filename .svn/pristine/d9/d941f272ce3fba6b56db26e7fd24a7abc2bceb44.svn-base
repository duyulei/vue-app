<template>
  <div class="edu-edit">
    <x-header class="header" :left-options="{backText: ''}">教育背景</x-header>
    <div class="career-time">
      <group class="group-time">
        <datetime class="date-left user-defined" :min-year='1900' format="YYYY-MM" title="在校时间" v-model="form.startTime" placeholder="-请选择-"></datetime>
      </group>
      <group class="group-time">
        <datetime class="date-right" :min-year='1900' format="YYYY-MM" title="至" v-model="form.endTime" placeholder="-请选择-"></datetime>
      </group>
    </div>
    <group class="basic-info">
        <x-input class="user-defined" title="学校" v-model="form.schoolName" placeholder="请填写学校"></x-input>
        <x-input class="user-defined" title="专业" v-model="form.major" placeholder="请填写专业"></x-input>
        <popup-radio class="user-defined" title="学历" :options="eduHistoryCodes" v-model="form.eduHistoryCode" placeholder="请选择学历"></popup-radio>
        <x-input class="user-defined" title="校内职务" v-model="form.schoolJob" placeholder="请填写校内职务"></x-input>
        <x-input title="校内荣誉" v-model="form.honor" placeholder="请填写校内荣誉"></x-input>
        <cell title="实习经历"></cell>
        <x-textarea placeholder="请描述你的实习经历" v-model="form.fieldExp"></x-textarea>
        <div class="delete-box" v-if="form.eduExpId">
          <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
        </div>
        <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    </group>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除教育经历将无法恢复，你确认删除？</p>
      </confirm>
  </div>
</template>

<script>
  import { Group, XInput, XTextarea, Cell, XButton, Datetime, Confirm, PopupRadio, XHeader } from 'vux'

  export default {
    name: 'edu-edit',
    components: { Group, XInput, XTextarea, Cell, XButton, Datetime, Confirm, PopupRadio, XHeader },
    data() {
      return {
        index: '',
        deleteShow: false,
        form: {
          // 教育经历ID
          eduExpId: '',
          startTime: '',
          endTime: '',
          schoolName: '',
          major: '',
          eduHistoryCode: '',
          schoolJob: '',
          honor: '',
          fieldExp: ''
        },
        eduHistoryCodes: [
          {
            key: '001',
            value: '高中'
          }, {
            key: '002',
            value: '中专'
          }, {
            key: '003',
            value: '大专'
          }, {
            key: '004',
            value: '本科'
          }, {
            key: '005',
            value: '硕士'
          }, {
            key: '006',
            value: '博士'
          }, {
            key: '007',
            value: 'MBA'
          }
        ]
      }
    },
    created() {
      if (this.$route.query.eduExpId){
        this.form.eduExpId = this.$route.query.eduExpId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.eduBgdValue.eduExpValueList)
        this.form.startTime = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].startTime
        if (this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].endTime === '至今'){
          this.form.endTime = ''
        } else {
          this.form.endTime = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].endTime
        }
        this.form.schoolName = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].schoolName
        this.form.major = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].major
        this.form.eduHistoryCode = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].eduHistoryCode
        this.form.schoolJob = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].schoolJob
        this.form.honor = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].honor
        this.form.fieldExp = this.$store.state.resume.resume.eduBgdValue.eduExpValueList[this.index].fieldExpEdit
      }
    },
    methods: {
      save: function () {
        if (!this.form.startTime){
          this.$vux.toast.text('请填写开始时间')
          return
        }
        if (!this.form.endTime){
          this.$vux.toast.text('请填写结束时间')
          return
        }
        this.$store.dispatch('editEduList', this.form).then(res => {
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
        this.$store.dispatch('deleteEduList', this.form).then(res => {
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
.edu-edit{
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
.edu-edit .weui-textarea{
  background: #f1f1f1;
  padding:10px;
  min-height:150px;
}

  .edu-edit .weui-input{
    text-align: right;
  }
.edu-edit .vux-datetime-value .vux-cell-value {
    font-size: 12px !important;
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

