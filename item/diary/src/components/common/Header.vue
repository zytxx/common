<template>
  <div>
  <header>
    <Row>
      <Col :span="24">
      <div class="log"><h1>胶囊日记</h1><div class="user"><span>登录</span><span>注册</span></div></div>
      </Col>
    </Row>
  </header>
  <nav>
    <ul @click="change($event)">
      <li nav="0">首页</li>
      <li nav="1">我的关注</li>
      <li nav="2">我的日记</li>
      <li nav="3">写日记</li>
      <li nav="4">个人主页</li>
    </ul>
  </nav>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        flag: 0
      }
    },
    methods: {
      change (e) {
       // console.log(e.target.getAttribute('nav'))
        let lis = e.target.parentNode.children
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.color = ''
        }
        e.target.style.color = '#283dff'
        switch (e.target.getAttribute('nav')) {
          case '0' :
            alert('首页')
            this.$router.push('/index')
            break
          case '1' :
            alert('我的关注')
            break
          case '2' :
            alert('我的日记')
            break
          case '3' :
            alert('写日记')
            this.$router.push('/write')
            break
          case '4' :
            alert('个人主页')
            break
        }
      }
    }
  }
</script>
<style type="text/css" scoped lang="scss">
header{
  width: 100%;
  background: #fff;
  box-shadow: 0px 1px 2px #ddd;
  .ivu-row{
    margin: 0 auto;
    width: 70%;
    .log{
      height: 70px;
      line-height: 70px;
      &:after{
        content:'';
        height:0;
        line-height: 0;
        display:block;
        visibility: hidden;
        clear:both;
      }
      h1{
        display: inline-block;
        color: #2d85e4;
        font-size: 33px;
        letter-spacing: 10px;
      }
      .user{
        float:right;
        span{
          padding: 0 20px;
          font-size: 14px;
          color: #444;
          cursor:pointer;
          letter-spacing: 5px;
          &:hover{
            color:#5cadff;
          }
        }
      }
    }

  }
}
nav{
  margin: 20px auto;
  ul{
    margin: 0 auto;
    width: 80%;
    background: #fff;
    height: 60px;
    line-height: 60px;
    &:after{
      content:'';
      height:0;
      line-height: 0;
      display:block;
      visibility: hidden;
      clear:both;
    }
    li{
      font-size: 16px;
      float: left;
      padding: 0 50px;
      cursor:pointer;
      &:nth-child(1){
        margin-left: 90px;
      }
      &:hover{
        background: #ddd;
      }
    }

  }
}
</style>
