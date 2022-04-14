<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 递归菜单
 * @Date: 2021-02-24 16:58:17
 * @LastEditTime: 2022-04-14 16:47:43
-->
<template>
  <div class="lj-menu-item">
    <template v-for="item in menuData">
      <template v-if="item.children.length">
        <el-submenu :index="item.id" :key="item.id">
          <template slot="title">
            <template v-if="item.icon">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-else>
              <div class="radius"></div>
              <div>{{ item.title }}</div>
            </template>
          </template>
          <menu-item :menuData="item.children"></menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item
          :index="item.id"
          :key="item.id"
          @click="goRouter(item.router)"
        >
          <template v-if="item.icon">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <template v-else>
            <div class="radius"></div>
            <div>{{ item.title }}</div>
          </template>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "menuItem",

  data() {
    return {};
  },

  props: {
    menuData: {
      type: Array,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(["nowRouter"]),
  },

  mounted() {},

  methods: {
    // 路由跳转
    goRouter(data) {
      if (this.nowRouter === data) {
        return;
      } else {
        this.$router.push(data);
      }
    },
  },
};
</script>

<style lang="scss">
</style>