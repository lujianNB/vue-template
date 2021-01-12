<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 根组件
 * @Date: 2020-11-18 17:26:21
 * @LastEditTime: 2020-11-23 17:06:54
-->
<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 100%;
  overflow: hidden;
}
</style>