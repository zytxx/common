<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" type="text/css">
  @media screen and (max-width: 1344px){
    body{
      width: 1344px;
    }
  }
  body{
    background: #eee;
  }
</style>
