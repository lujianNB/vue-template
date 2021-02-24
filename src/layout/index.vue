<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 组件外层
 * @Date: 2020-11-23 10:04:45
<<<<<<< HEAD
 * @LastEditTime: 2021-02-24 13:45:43
=======
 * @LastEditTime: 2020-11-23 16:50:18
>>>>>>> master
-->
<template>
  <div class="lj-layout">
    <div class="header">头部</div>
    <div class="footer">
      <div class="left">
        <left-menu></left-menu>
      </div>
      <div class="right">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu";
export default {
  name: "layout",

  data() {
    return {};
  },

  components: {
    leftMenu,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang='scss' scoped>
.lj-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #eee;
  }
  .footer {
    flex: 1;
    display: flex;
    overflow: hidden;
    .left {
      width: 200px;
      height: 100%;
      background-color: #666;
    }
    .right {
      flex: 1;
      height: 100%;
      background-color: #999;
      overflow: hidden;
    }
  }
}
</style>