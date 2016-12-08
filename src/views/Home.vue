<template>
  <div class="search-wrap">
    <md-input-container md-inline class="input-wrap">
      <label>工号</label>
      <md-input></md-input>
    </md-input-container>
    <md-input-container>
      <label for="movie">分组</label>
      <md-select name="movie" id="movie" v-model="movie">
        <md-option value="2000009">亚太二楼</md-option>
        <md-option value="2000008">金业六楼 </md-option>
      </md-select>
    </md-input-container>
  </div>
</template>
<script>
import apiClient from 'src/helper/apiClient'
export default {
  beforeCreate () {
    apiClient({
      url: 'get_group_member',
      data: {
        page: 1,
        rows: 10,
        group_id: 0
      }
    })
  }
}
</script>

<style>
  .search-wrap {
   max-width: 480px;
   display: flex;
  }
  .input-wrap {
   min-width: 200px;
   margin-right: 12px;
  }
</style>