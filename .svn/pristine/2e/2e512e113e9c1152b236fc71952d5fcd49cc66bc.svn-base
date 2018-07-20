<template>
  <div class="annex-edit">
    <x-header class="header" :left-options="{backText: ''}">附件</x-header>
    <group class="basic-info">
        <x-input class="user-defined" title="附件名称" v-model="form.attachmentName" placeholder="请填写附件名称"></x-input>
        <cell title="附件描述"></cell>
        <x-textarea placeholder="请填写描述内容" v-model="form.attachmentDsc"></x-textarea>
    </group>
    <div class="annex-tab">
      <div>
        <tab active-color='#D86471'>
          <tab-item :selected="selected" @on-item-click="uploadClick">上传图片</tab-item>
          <tab-item :selected="!selected" @on-item-click="worksClick">作品链接</tab-item>
        </tab>
        <div v-if="swiper" style="text-align:center;">
          <el-upload
          class="avatar-uploader"
          action="https://www.t021.top/bolego/file/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="uploadAddrImg" width="100%" height="100%" :src="uploadAddrImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          <span>支持GIF PNG JPG类型的文件,每个附件大小限制在2MB.</span>
        </div>
        <group v-else>
          <x-input title="链接地址" v-model="uploadAddrLink" @on-blur="onBlur" placeholder="请填写链接地址"></x-input>
        </group>
      </div>
    </div>
    <div class="delete-box" v-if="form.attachmentId">
      <x-button class="delete-btn" type="default" style="border-radius:99px;" @click.native="deleteShow = true">删除本条</x-button>
    </div>
    <x-button class="basic-btn" type="warn" @click.native="save">保存</x-button>
    <confirm v-model="deleteShow"
      title="删除"
      :close-on-confirm="false"
      @on-confirm="onConfirm">
        <p style="text-align:center;">删除附件模块将无法恢复，你确认删除？</p>
    </confirm>
  </div>
</template>

<script>
  import { Group, XInput, Cell, XTextarea, XButton, Tab, TabItem, Swiper, SwiperItem, Confirm, XHeader } from 'vux'
  import Uploader from 'vux-uploader'

  export default {
    name: 'annex-edit',
    components: { Group, XInput, Cell, XTextarea, XButton, Tab, TabItem, Swiper, SwiperItem, Confirm, Uploader, XHeader },
    data() {
      return {
        swiper: true,
        selected: true,
        index: '',
        deleteShow: false,
        imgUrl: '',
        form: {
          attachmentId: '',
          attachmentName: '',
          uploadDiv: '01',
          uploadAddr: '',
          attachmentDsc: ''
        },
        uploadAddrImg: '',
        uploadAddrLink: ''
      }
    },
    created() {
      if (this.$route.query.attachmentId){
        this.form.attachmentId = this.$route.query.attachmentId
        this.index = this.$route.query.index
        console.log(this.$store.state.resume.resume.affixInfoValue.attachmentValueList)
        this.form.attachmentName = this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].attachmentName
        this.form.attachmentDsc = this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].attachmentDscEdit
        this.form.uploadDiv = this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].uploadDiv
        if (this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].uploadDiv === '01'){
          this.uploadAddrImg = this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].uploadAddr
          this.form.uploadAddr = this.uploadAddrImg
          this.swiper = true
          this.selected = true
        }
        if (this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].uploadDiv === '02'){
          this.uploadAddrLink = this.$store.state.resume.resume.affixInfoValue.attachmentValueList[this.index].uploadAddr
          this.form.uploadAddr = this.uploadAddrLink
          this.swiper = false
          this.selected = false
        }
      }
    },
    methods: {
      uploadClick () {
        this.swiper = true
        this.form.uploadDiv = '01'
      },
      worksClick () {
        this.swiper = false
        this.form.uploadDiv = '02'
      },
      handleAvatarSuccess (res, file) {
        this.uploadAddrImg = file.url
        console.log(res.data.fileUrl)
        this.form.uploadAddr = res.data.fileUrl
      },
      beforeAvatarUpload (file) {
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isLt2M) {
          this.$vux.toast.text('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      save: function () {
        if (!this.form.attachmentName) {
          this.$vux.toast.text('请填写附件名称')
          return
        }
        if (this.form.uploadDiv === '01') {
          if (!this.uploadAddrImg) {
            this.$vux.toast.text('请上传图片')
            return
          }
        }
        if (this.form.uploadDiv === '02') {
          if (!this.uploadAddrLink) {
            this.$vux.toast.text('请填写链接')
            return
          }
        }
        this.$store.dispatch('editAnnex', this.form).then(res => {
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
        this.$store.dispatch('deleteAnnex', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.isLoading = true
            this.$router.go(-1)
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      },
      onBlur () {
        this.form.uploadAddr = this.uploadAddrLink
      }
    }
  }
</script>

<style scoped>
.annex-edit{
    background: #f1f1f1;
    padding-top: 45px;
    padding-bottom: 82px;
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
.annex-tab{
  background: #FFF;
  padding-bottom: 120px;
}
.annex-tab > div{
  padding: 0 15px;
}
.avatar-uploader {
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar,.avatar-uploader-icon {
  display: block;
  font-size: 28px;
  color: #8c939d;
  text-align: center;
  width: 250px;
  height: 138px;
  margin: 30px auto;
  line-height: 128px;
  border: 5px solid #f1f1f1;
  box-shadow: 0 0 5px;
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
.annex-edit .weui-uploader__input-box {
    float: none;
    width: 98%;
    height: 150px;
    background: #f1f1f1;
    margin: 15px 0;
    border: 1px dotted;
    border-radius: 10px;
}

.annex-edit .weui-input{
    text-align: right;
  }
.annex-edit .weui-textarea{
    background: #f1f1f1;
    padding:10px;
    min-height:100px;
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

