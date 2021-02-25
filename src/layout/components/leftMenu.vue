<!--
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 菜单
 * @Date: 2020-11-23 16:40:33
 * @LastEditTime: 2021-02-25 10:51:32
-->
<template>
  <div class="lj-left-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#242F4B"
      text-color="#D2D5DE"
      active-text-color="#468FFE"
      ref="activeIndex"
    >
      <menu-item :menuData="menuData"></menu-item>
    </el-menu>
  </div>
</template>

<script>
import menuItem from "./menuItem";
export default {
  name: "leftMenu",

  components: {
    menuItem,
  },

  data() {
    return {
      activeIndex: null, //当前菜单展开
      menuData: [
        {
          id: "0",
          title: "首页",
          router: "/home",
          icon: "el-icon-s-home",
          children: [],
        },
        {
          id: "1",
          title: "巡检",
          icon: "el-icon-place",
          router: "/home",
          children: [
            {
              id: "1-0",
              title: "智能巡检设置",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "1-1",
              title: "巡检记录",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "1-2",
              title: "人工巡检任务",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "1-3",
              title: "故障维修",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "1-4",
              title: "保养维护任务",
              icon: "",
              router: "/home",
              children: [],
            },
          ],
        },
        {
          id: "2",
          title: "设备管理",
          icon: "el-icon-s-management",
          router: "",
          children: [
            {
              id: "2-0",
              title: "设备管理",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "2-1",
              title: "设备生命周期管理",
              icon: "",
              router: "/home",
              children: [],
            },
          ],
        },
        {
          id: "3",
          title: "告警管理",
          icon: "el-icon-sunrise",
          router: "/home",
          children: [
            {
              id: "3-0",
              title: "巡检告警",
              icon: "",
              router: "/home",
              children: [],
            },
          ],
        },
        {
          id: "4",
          title: "消息中心",
          icon: "el-icon-chat-dot-square",
          router: "/home",
          children: [
            {
              id: "4-0",
              title: "消息列表",
              icon: "",
              router: "/home",
              children: [],
            },
          ],
        },
        {
          id: "5",
          title: "系统管理",
          icon: "el-icon-setting",
          router: "/home",
          children: [
            {
              id: "5-0",
              title: "用户管理",
              icon: "",
              router: "/home",
              children: [
                {
                  id: "5-0-1",
                  title: "权限管理",
                  icon: "",
                  router: "/home",
                  children: [],
                },
              ],
            },
            {
              id: "5-1",
              title: "角色管理",
              icon: "",
              router: "/home",
              children: [],
            },
            {
              id: "5-2",
              title: "权限管理",
              icon: "",
              router: "/home",
              children: [],
            },
          ],
        },
      ],
    };
  },

  computed: {},

  mounted() {},

  methods: {},

  watch: {
    $route: {
      handler(val) { // 监听路由，确保刷新当前页面与菜单一致。
        this.activeIndex = val.meta.id;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.lj-left-menu {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>