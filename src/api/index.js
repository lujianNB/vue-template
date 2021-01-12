/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 例子
 * @Date: 2020-11-19 16:48:23
 * @LastEditTime: 2020-11-19 17:04:00
 */
import request from '@/axios/require'


export function getAppList (data) {
  return request({
    url: '/admin/auth/group/usermenu',
    data: data
  })
}