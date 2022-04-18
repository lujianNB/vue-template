/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 路由表
 * @Date: 2020-11-19 14:01:23
 * @LastEditTime: 2022-04-18 13:28:11
 */
import Home from '../views/home'
import Layout from '@/layout'

export const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/home',
        meta: {
            pathName: '基础布局'
        },
        children: [{
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                pathName: '首页',
                id: '0'
            }
        }, ]
    },
    {
        path: '*', // 必须放在配置最下面 - 错误路由配置
        component: () => import( /* webpackChunkName: "error" */ '../views/error'),
        meta: {
            pathName: '错误页'
        }
    }
]