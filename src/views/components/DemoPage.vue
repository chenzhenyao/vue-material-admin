<template>
  <md-card class="demo-example" :class="classes" :style="{ height: height + 'px' }">
    <md-toolbar class="demo-example-toolbar">
      <h2 class="md-title">{{ label }}</h2>
    </md-toolbar>
    <section class="demo-example-body">
      <slot></slot>
    </section>
  </md-card>
</template>

<style lang="stylus" scoped>
  .demo-example
    max-width: 100%
    min-width: 320px
    display: flex
    flex-direction: column
    overflow: hidden
    position: relative
    background-color: #fafafa
    margin: 16px 16px 0
    .demo-example-toolbar
      background-color: #e0e0e0
      color: rgba(0, 0, 0, .87)
    .demo-example-body
      padding: 16px
      flex: 1
      background-color: #FFF
</style>

<script>
  export default {
    props: {
      label: [String, Number]
    },
    computed: {
      classes () {}
    }
  }
</script>

