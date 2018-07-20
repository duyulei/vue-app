<template>
  <div class="account-view">
    <div>
      <group class="input-group">
        <x-input type="tel" title="手机账号:" v-model="phoneView" disabled>
          <x-button plain type="primary" slot="right" @click.native="goResetPhone">更换手机</x-button>
        </x-input>
        <x-input type="password" title="登录密码:" v-model="password" disabled>
          <x-button plain type="primary" slot="right" @click.native="goModifyPassword">修改密码</x-button>
        </x-input>
      </group>
    </div>
    <Flexbox class="bottom" justify="center" align="center" @click.native="loginOut">
      退出登录
    </Flexbox>
  </div>
</template>

<script>
  import { XInput, Group, XButton, Cell, Flexbox } from 'vux'

  export default {
    name: 'account-view',
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox
    },
    data () {
      return {
        phone: '',
        password: '123123'
      }
    },
    created () {
      this.$store.dispatch('getAccountInfo').then(res => {
        if (res.data.code === '200') {
          this.phone = res.data.data.mobileNo
        } else {
          this.$vux.toast.text(res.data.message)
        }
      })
    },
    computed: {
      phoneView: {
        set () {
        },
        get () {
          let start = this.phone.slice(0, 3)
          let end = this.phone.slice(-4)
          return start + '****' + end
        }
      }
    },
    methods: {
      goResetPhone () {
        this.$router.push({path: '/account/reset-phone-one'})
      },
      goModifyPassword () {
        this.$router.push({path: '/account/modify-password'})
      },
      loginOut () {
        this.$store.commit('clearAccountToken')
        this.$router.replace({path: '/home'})
      }
    }
  }
</script>

<style scoped>
  .account-view {

  }

  .input-group {
    padding: 20px;
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

  .weui-btn_plain-primary {
    width: 80px;
    height: 30px;
    font-size: 12px !important;
    color: #D86471 !important;
    border: 1px solid #D86471 !important;
  }

  .primary-red {
    background-color: #D86471 !important;
  }

  .bottom {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 65px;
    border-top: 3px solid #D86471;
    color: #D86471;
    font-size: 18px;
  }

</style>
