<template>
  <div class="container">
    <h1>任务管理系统</h1>
    <h3>可以开始开发功能页面啦</h3>
    <el-button type="primary">element-plus</el-button>
    <h1>开源计划</h1>
    <ul>
      <li>
        <div>任务管理</div>
        <ul>
          <li>任务的增删改查</li>
          <li>生成周报，季报</li>
        </ul>
      </li>
      <li>用户权限系统</li>
      <li>项目管理</li>
      <li>团队管理</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
}
</script>
<style scoped lang="less">
.container {
  padding: 50px 100px;
  li {
    line-height: 2.4;
  }
}
</style>