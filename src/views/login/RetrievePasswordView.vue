<template>
  <div class="retrieve-password-view">
    <div>
      <group class="input-group">
        <x-input type="tel" v-model.trim="form.phone" keyboard="number" is-type="china-mobile" :max="11"
                 placeholder="输入手机号"></x-input>
        <x-input v-model.trim="form.phoneCaptcha" placeholder="手机验证码">
          <a slot="right" class="btn-input-captcha" @click="showImageDialog()">
            {{phoneCaptchaBtn.disabled ?
            phoneCaptchaBtn.time+'s':'获取验证码'}}
          </a>
        </x-input>
      </group>
    </div>
    <x-button class="primary-red" type="primary" style="margin-top: 20px;" @click.native="next">下一步</x-button>

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
  import { Flexbox, XInput, Group, XButton, XDialog } from 'vux'
  import axios from 'axios'

  export default {
    name: 'retrieve-password-view',
    components: {
      Flexbox,
      XInput,
      Group,
      XButton,
      XDialog
    },
    data () {
      return {
        showToast: false,
        form: {
          phone: '',
          imageCaptcha: '',
          phoneCaptcha: ''
        },
        captcha: 'https://www.t021.top/bolego/captcha/image/get?t=' + new Date(),
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
        this.loadPhoneCaptcha()
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
      next: function () {
        if (this.form.phone !== '' && this.form.imageCaptcha !== '' && this.form.phoneCaptcha !== '') {
          this.$store.state.user.retrieve.phone = this.form.phone
          this.$store.state.user.retrieve.imageCaptcha = this.form.imageCaptcha
          this.$store.state.user.retrieve.phoneCaptcha = this.form.phoneCaptcha
          this.$router.replace({path: '/set-password'})
        } else {
          this.$vux.toast.text('请输入正确手机号或验证码')
        }
      }
    }
  }
</script>

<style scoped>
  .retrieve-password-view {
    padding: 15px 50px;
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
  }

  .btn-input-captcha {
    font-size: 14px;
    color: #454545;
  }

</style>
<style>
  .dialog .weui-dialog {
    padding: 20px;
  }
</style>
