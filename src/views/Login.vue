<template>
  <div v-md-theme="'default'">
    <md-whiteframe md-elevation="8" class="login-wrap">
      <form novalidate @submit.stop.prevent="login">
        <md-input-container>
          <label>用户名</label>
          <md-input v-model="name"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>密码</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
        <div>
          <md-button 
            type="submit"
            class="md-raised md-primary login-btn">登录</md-button>
        </div>
      </form>
    </md-whiteframe>
  </div>
</template>
<script>
import Md5 from 'blueimp-md5'
import storage from 'simplestorage.js'
import apiClient from 'src/helper/apiClient'

export default {
  data () {
    return {
      name: 'yatai',
      password: ''
    }
  },
  methods: {
    login () {
      apiClient({
        url: 'userLogin',
        data: {
          user_name: this.name,
          password: Md5(this.password),
          select: 1
        }
      })
      .then(({ data }) => {
        storage.set('@auth', data)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-wrap
    padding: 112px 48px 64px
    margin: 200px auto 0
    max-width: 360px
    background: url('../assets/logo-nd.png') no-repeat center 32px
    background-size: 48px
  @media (max-width: 480px)
    .login-wrap
      margin-top: 140px
      box-shadow: none
      
  .login-btn {
    width: 100%;
    margin: 0;
  }
</style>