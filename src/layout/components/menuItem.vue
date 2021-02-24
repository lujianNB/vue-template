<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 递归菜单
 * @Date: 2021-02-24 16:58:17
 * @LastEditTime: 2021-02-24 17:16:13
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
export default {
  name: "menuItem",

  data() {
    return {
      nowRouter: null,
    };
  },

  props: {
    menuData: {
      type: Array,
      default: () => {},
    },
  },

  computed: {},

  mounted() {
    this.nowRouter = this.$route.path;
  },

  methods: {
    // 路由跳转
    goRouter(data) {
      if (this.nowRouter === data) {
        return;
      } else {
        this.nowRouter = data;
        this.$router.push(data);
      }
    },
  },
};
</script>

<style lang="scss">
.el-menu-item.is-active {
  background: linear-gradient(90deg, #2b579c 0%, rgba(52, 89, 150, 0) 100%);
  border-left: 2px solid #0086ff;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: linear-gradient(90deg, #2b579c 0%, rgba(52, 89, 150, 0) 100%);
  border-left: 2px solid #0086ff;
}
.el-submenu__title {
  i {
    color: #00d7ff !important;
  }
}
.el-menu-item,
.el-submenu__title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .radius {
    width: 8px;
    height: 8px;
    background: #468ffe;
    opacity: 0.6;
    border-radius: 50%;
    margin-right: 10px;
  }
  i {
    color: #00d7ff !important;
  }
}
</style>