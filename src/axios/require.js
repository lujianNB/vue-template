/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: axios封装
 * @Date: 2020-11-19 14:38:24
 * @LastEditTime: 2020-11-19 17:02:18
 */
import axios from 'axios'
import { Message } from 'element-ui' // 消息组建

let _Message = function (params = {}) {
    let _duration = params.duration || 2000
    params.duration = _duration
    Message(params)
}

// 创建axios实例
const http = axios.create({
    baseURL: '', // api的base_url
    /* baseURL: "proxy", */
    // `method` 是创建请求时使用的方法
    method: 'post', // 默认是 post
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 添加请求拦截器
http.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么

        const defaultParams = {
            web_access: 'webqSoiKwpWVge4TkaryH6MKvOdceGt7ZMaF20g8H0cnXIweb',
            token: 'kj6tFXDccchnhEqjjQRyyJwVBjXyNgG2GpMVEqYkSeM9E56NbvpG',
        }
        config.data = Object.assign({}, defaultParams, config.data)

        // 接口报错不要axios直接message提示，而自己catch处理的时候
        if (config.data && config.data.noErrorMessage) {
            config.noErrorMessage = true
        }
        return config // 此处切记记得将请求参数return出去
    },
    error => {
        // 对请求错误做些什么

        console.log(error) // for debug
        Promise.reject(error)
    }
)

// 添加响应拦截器
http.interceptors.response.use(
    response => {
        if (response) {
            let { data, config } = response
            // 判断是否需要显示错误message提示
            const noErrorMessage = config.noErrorMessage

            const { code, msg } = data
            if (code !== 0) {
                noErrorMessage || _Message({
                    message: msg,
                    type: 'warning'
                })
                return Promise.reject(data)
            }

            return data
        } else {
            return {}
        }
    },
    err => {
        // 对响应错误做点什么
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break
                case 401:
                    err.message = '未授权，请登录'
                    break
                case 403:
                    err.message = '拒绝访问'
                    break
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break
                case 408:
                    err.message = '请求超时'
                    break
                case 500:
                    err.message = '服务器内部错误'
                    break
                case 501:
                    err.message = '服务未实现'
                    break
                case 502:
                    err.message = '网关错误'
                    break
                case 503:
                    err.message = '服务不可用'
                    break
                case 504:
                    err.message = '网关超时'
                    break
                case 505:
                    err.message = 'HTTP版本不受支持'
                    break
                default:
            }
            // 判断是否需要显示错误message提示
            const noErrorMessage = err.config.noErrorMessage;
            noErrorMessage || _Message({
                message: err.message,
                type: 'error'
            })
        }
        return Promise.reject(err)
    }
)

export default function (config) {
    return http(config)
}