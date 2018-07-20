<template>
  <div class="wechat-bind-view">
    <flexbox class="logo" justify="center" align="center">
      <img src="../../assets/logo-black.png">
    </flexbox>
    <div>
      <group class="input-group">
        <x-input type="tel" v-model.trim="form.phone" keyboard="number" is-type="china-mobile"
                 :max="11"
                 placeholder="输入绑定手机号"></x-input>
        <x-input v-model.trim="form.phoneCaptcha" placeholder="手机验证码">
          <a slot="right" class="btn-input-captcha" @click="showImageDialog()">
            {{phoneCaptchaBtn.disabled ?
            phoneCaptchaBtn.time+'s':'获取验证码'}}
          </a>
        </x-input>
      </group>
    </div>
    <x-button class="primary-red" type="primary" style="margin-top: 20px;" @click.native="bind">
      绑定
    </x-button>
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
  import {mapState} from 'vuex'
  import axios from 'axios'
  import {Flexbox, XInput, Group, XButton, XDialog} from 'vux'

  export default {
    name: 'wechat-bind-view',
    components: {
      Flexbox,
      XInput,
      Group,
      XButton,
      XDialog
    },
    data() {
      return {
        showToast: false,
        form: {
          phone: '',
          imageCaptcha: '',
          phoneCaptcha: '',
          unionid: ''
        },
        captcha: '',
        phoneCaptchaBtn: {
          disabled: false,
          time: 0
        }
      }
    },
    computed: mapState({
      accountToken: state => state.user.accountToken
    }),
    created: function () {
      console.log(this.$route.query.unionid)
      this.form.unionid = this.$route.query.unionid
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
      bind: function () {
        this.$store.dispatch('wechatBind', this.form).then(res => {
          console.log(res)
          if (res.data.code === '200') {
            this.$router.go(-1)
          } else {
          }
          this.$vux.toast.text(res.data.message)
        })
      }
    }
  }
</script>

<style scoped>

  .wechat-bind-view {
    padding: 15px 50px;
  }

  .logo {
    height: 150px;
  }

  .logo img {
    height: 50px;
    width: 120px;
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
  }

</style>

<style>
  .dialog .weui-dialog {
    padding: 20px;
  }
</style>
