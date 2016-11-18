<template>
  <div>
    <md-whiteframe md-elevation="8" class="test-wrap">
      <md-input-container>
        <label>User Name</label>
        <md-input></md-input>
      </md-input-container>
      <md-input-container md-has-password>
        <label>Password</label>
        <md-input type="password"></md-input>
      </md-input-container>
      <div>
        <md-button class="md-raised md-primary login-btn" @click="login">登录</md-button>      
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
  export default {
    methods: {
      login () {
        this.$router.push('home')
      }
    }
  }
</script>

<style scoped>
  .test-wrap {
    padding: 112px 48px 64px;
    margin: 200px auto 0;
    max-width: 360px;
  }
  .login-btn {
    width: 100%;
    margin: 0;
    color: #fff;
  }
</style>