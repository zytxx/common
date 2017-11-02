<template>
  <div>
  <vheader></vheader>
  <div class="container">
    <router-view></router-view>
  </div>
  <vfooter></vfooter>
  <BackTop :height="120" :bottom="120" :right="50">
    <div class="top">返回顶端</div>
  </BackTop>
  </div>
</template>
<script>
  import header from './Header.vue'
  import footer from './Footer.vue'
  export default {
    name: 'frame',
    created () {
      document.getElementsByTagName('body')[0].style.background = ''
    },
    data () {
      return {

      }
    },
    components: {
      vheader: header,
      vfooter: footer
    }
  }
</script>
<style type="text/css" lang="scss">
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
</style>
