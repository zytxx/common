<template>
  <div>
    <div class="add_diary">
      <Form :model="formItem" :label-width="80">
        <FormItem label="选择日记本">
          <Select v-model="formItem.select" placeholder="请选择" style="width: 200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'write',
  data () {
    return {
      cityList: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      formItem: {
        select: ''
      }
    }
  }
}
</script>
<style type="text/css" scoped lang="scss">
  .add_diary{
    width: 80%;
    margin: 0 auto;
    padding:20px;
    background: #fff;
  }
</style>
