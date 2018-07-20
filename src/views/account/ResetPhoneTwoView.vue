<template>
  <div class="reset-phone-two-view">
    <div>
      <group class="input-group">
        <x-input type="tel" v-model="form.phone" placeholder="输入新手机号">
        </x-input>
        <x-input placeholder="手机验证码" v-model="form.phoneCaptcha">
          <a slot="right" class="btn-input-captcha" @click="showImageDialog()">
            {{phoneCaptchaBtn.disabled ?
            phoneCaptchaBtn.time+'s':'获取验证码'}}
          </a>
        </x-input>
      </group>
    </div>
    <x-button class="primary-red" type="primary" style="margin-top: 20px;" @click.native="submit">提交</x-button>
    <x-dialog v-model="showToast" hide-on-blur class="dialog">
      <x-input v-model.trim="form.imageCaptcha" placeholder="图片验证码">
        <img @click="reloadCaptcha()" slot="right" class="weui-vcode-img" :src="captcha">
      </x-input>
      <x-button class="primary-red" mini type="primary" style="margin-top: 20px;" @click.native="submitImageCaptcha">提交
      </x-button>
    </x-dialog>
  </div>
</template>

<script>
  import {XInput, Group, XButton, Cell, Flexbox, XDialog} from 'vux'
  import axios from 'axios'

  export default {
    name: 'reset-phone-two-view',
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox,
      XDialog
    },
    data() {
      return {
        captcha: '',
        form: {
          phone: '',
          phoneCaptcha: '',
          imageCaptcha: ''
        },
        phoneCaptchaBtn: {
          disabled: false,
          time: 0
        }
      }
    },
    methods: {
      reloadCaptcha: function () {
        this.captcha = axios.defaults.baseURL + '/captcha/image/get?phoneNum=' + this.form.phone + '&t=' + new Date()
      },
      showImageDialog: function () {
        if (!this.form.phone) {
          this.$vux.toast.text('请输入手机号')
          return
        }
        this.showToast = true
        this.reloadCaptcha()
      },
      submitImageCaptcha: function () {
        this.showToast = false
        this.loadPhoneCaptcha();
      },
      loadPhoneCaptcha: function () {
        if (this.phoneCaptchaBtn.disabled) {
          return
        }
        this.$store.dispatch('getPhoneCaptcha', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.phoneCaptchaBtn.disabled = true
            this.phoneCaptchaBtn.time = 60
            this.timer()
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      },
      timer: function () {
        if (this.phoneCaptchaBtn.time > 0) {
          this.phoneCaptchaBtn.time--
          setTimeout(this.timer, 1000)
        } else {
          this.phoneCaptchaBtn.disabled = false
        }
      },
      submit: function () {
        this.$store.dispatch('modifyMobile', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.$router.replace({path: '/account'})
          } else {
            this.$vux.toast.text(res.data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .reset-phone-two-view {
    padding: 30px;
  }

  .input-group > div {
    margin-top: 0;
  }

  .input-group .weui-cells:before {
    border-top: 0;
  }

  .input-group .weui-cells:after {
    border-bottom: 0;
  }

  .input-group .weui-cell:before {
    height: 1px;
    border-top: 1px;
  }

  .input-group .weui-cell:after {
    content: " ";
    position: absolute;
    left: 15px;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #f1f1f1;
    color: #f1f1f1;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }

  .weui-vcode-img {
    width: 80px;
  }

  .primary-red {
    background-color: #D86471 !important;
    width: 80% !important;
  }


</style>
