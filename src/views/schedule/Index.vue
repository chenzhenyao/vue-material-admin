<template>
  <demo-page label="日程管理 1">
    <md-button class="md-fab md-fab-top-right md-mini" style="top:38px;right:38px;z-index:10;">
      <md-icon>add</md-icon>
    </md-button>
    <md-table-card style="box-shadow:none;">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>ID</md-table-head>
            <md-table-head>时间</md-table-head>
            <md-table-head>地点</md-table-head>
            <md-table-head>事件</md-table-head>
            <md-table-head>操作</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="(item, index) in schedules">
            <md-table-cell>{{item.schedule_id}}</md-table-cell>
            <md-table-cell>{{item.start_at}}</md-table-cell>
            <md-table-cell>{{item.address}}</md-table-cell>
            <md-table-cell>{{item.title}}</md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button">
                <md-icon>delete</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
      <md-table-pagination
      md-size="10"
      md-total="5"
      md-page="1"
      md-label="Rows"
      md-separator="of"
      :md-page-options="[]"
      ></md-table-pagination>
    </md-table-card>
  </demo-page>
</template>

<script>
import apiClient from 'src/helper/apiClient'
export default {
  data () {
    return {
      schedules: []
    }
  },
  beforeCreate () {
    apiClient({
      url: 'schedule_list',
      data: {
        page: 1,
        rows: 11,
        home_id: 9
      }
    })
    .then(({ data }) => {
      this.schedules = data.list || []
      console.log(data)
      console.log(this)
    })
    .catch(() => {
    })
  }
}
</script>

<style lang="stylus">
</style>
