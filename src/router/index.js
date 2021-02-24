/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 路由
 * @Date: 2020-11-18 17:26:21
 * @LastEditTime: 2020-11-19 14:03:08
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
