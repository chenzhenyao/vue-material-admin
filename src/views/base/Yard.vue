<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">My App</h2>
      <md-menu>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item @click="loginOut">退出</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
    </md-sidenav>
    <router-view></router-view>	
  </div>
</template>
<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    loginOut () {
      this.$router.push('login')
    }
  }
}
</script>
