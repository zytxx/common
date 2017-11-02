<template>
  <Row>
    <Col span="6" offset="9">
    <h2>欢迎登陆</h2>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
        <Icon type="ios-person-outline" size="20" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="请输入密码">
        <Icon type="ios-locked-outline" size="20" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Row>
          <Col span="12">
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </Col>
          <Col span="12">
          <Button type="primary" @click="handleReset('formInline')">重置</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'login',
    created () {
      document.getElementsByTagName('body')[0].style.background = 'url(../../../static/img/2.png)'
    },
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            // this.$Message.success('提交成功!')
            this.$axios.post('http://localhost/test/php/login.php').then((resp) => {
              console.log(resp.data.username)
              if (this.formInline.user === resp.data.username) {
                this.$router.push('/index')
              } else {
                this.$Message.error('账号密码有误!')
              }
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  #app{
    &>.ivu-row{
      margin-top: 230px;
      &>.ivu-col{
        background: rgba(255,255,255,.3);
        border: 1px solid rgba(255,255,255,.6);
        border-radius: 5px;
        box-shadow: 1px 1px 10px rgba(255,255,255,.6);
        padding: 30px 30px 0;
      }
      h2{
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
  @media screen and  (max-width:1200px) {
    #app>.ivu-row{
      width: 1200px;
    }
  }
  .ivu-btn{
    display: block;
    margin: 0 auto;
  }
</style>
