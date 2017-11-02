<template>
  <div class="hello">
    <Button type="success">成功按钮</Button>
    <Row>
      <Col span="12">
      <DatePicker type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
      </Col>
      <Col span="12">
      <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">

</style>
