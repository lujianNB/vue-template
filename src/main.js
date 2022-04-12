/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 入口文件
 * @Date: 2020-11-18 17:26:21
 * @LastEditTime: 2022-04-12 15:53:07
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import './utils'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/globel.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')