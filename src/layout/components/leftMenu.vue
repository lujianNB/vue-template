<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 菜单
 * @Date: 2020-11-23 16:40:33
 * @LastEditTime: 2021-01-12 13:44:41
-->
<template>
  <div class="lj-left-menu">
    <el-menu
      :router="true"
      default-active="home"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      ref="activeIndex"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="home">选项1</el-menu-item>
        <el-menu-item index="about">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "leftMenu",

  data() {
    return {};
  },

  computed: {},

  mounted() {
    window.addEventListener('popstate', this.callback)
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.callback)
  },

  methods: {
    callback() {
      this.$refs['activeIndex'].activeIndex = this.$route.path.slice(1)
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang='scss' scoped>
.lj-left-menu {
  width: 100%;
  height: 100%;
}
</style>