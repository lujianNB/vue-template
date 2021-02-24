/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: 全局方法
 * @Date: 2020-11-19 14:44:53
 * @LastEditTime: 2020-11-19 15:49:51
 */
import vueCookie from 'vue-cookies'

vueCookie.config(60 * 60 * 24 * 3)
// 设置cookie
const CK = {
    // 设置key
    set: (keyName, value, expireTimes) => {
        return vueCookie.set(keyName, value, expireTimes) // this
    },
    // 获取key
    get: (keyName) => {
        return vueCookie.get(keyName) // value
    },
    // 删除key
    remove: (keyName) => {
        return vueCookie.remove(keyName) // true、false
    },
    // 是否存在key
    isKey: (keyName) => {
        return vueCookie.isKey(keyName) // true、false
    },
    // 获取所有key
    keys: () => {
        return vueCookie.keys() // array
    }
}

// 以下是处理javascript小数精度加减乘除的四个的函数
/**
 * 必需要传的前两个参数:传入两个要计算的数字
 * 非必要传的最后一个参数:自己想要精确的位数
 */
const globalConst = {
    MAX_PRECISION: 8
}

// 计算两位数应该乘以的数，为加减乘数服务的函数
function formatNumber(num1, num2) {
    let r1, r2
    try {
        r1 = num1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    let sum = r1 + r2
    let sub = r2 - r1
    return { 'max': Math.pow(10, Math.max(r1, r2)), 'sum': Math.pow(10, sum), 'sub': Math.pow(10, sub) }
}

// 加法
const plus = function (num1, num2, n) {
    let formatNum = formatNumber(num1, num2).max
    let result = (num1 * formatNum + num2 * formatNum) / formatNum
    if (n) {
        return Number(result.toFixed(n))
    }
    return Number(result.toFixed(globalConst.MAX_PRECISION))
}

// 减法
const subtract = function (num1, num2, n) {
    let formatNum = formatNumber(num1, num2).max
    let result = (num1 * formatNum - num2 * formatNum) / formatNum
    if (n) {
        return Number(result.toFixed(n))
    }
    return Number(result.toFixed(globalConst.MAX_PRECISION))
}

// 乘法
const multiply = function (num1, num2, n) {
    let sum = formatNumber(num1, num2).sum
    let s1 = Number(num1.toString().replace('.', ''))
    let s2 = Number(num2.toString().replace('.', ''))
    let result = (s1 * s2) / sum
    if (n) {
        return Number(result.toFixed(n))
    }
    return Number(result.toFixed(globalConst.MAX_PRECISION))
}

// 除法
const divide = function (num1, num2, n) {
    let sub = formatNumber(num1, num2).sub
    let r1 = Number(num1.toString().replace('.', ''))
    let r2 = Number(num2.toString().replace('.', ''))
    let result = (r1 / r2) * sub
    if (n) {
        return Number(result.toFixed(n))
    }
    return Number(result.toFixed(globalConst.MAX_PRECISION))
}

// 深拷贝
const deepClone = function (source, nullVal) {
    if (!source || typeof source !== 'object') {
        return source
    }
    const targetObj = source.constructor === Array ? [] : {}
    for (const keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = deepClone(source[keys])
            } else {
                // 传null防止undefined被过滤
                if (nullVal === null) {
                    targetObj[keys] = source[keys] === undefined ? nullVal : source[keys]
                } else {
                    targetObj[keys] = source[keys]
                }
            }
        }
    }
    return targetObj
}

class Storage {
    constructor(props) {
        this.props = props || {}
        this.source = this.props.source || window.localStorage
        this.initRun()
    }
    initRun() {
        const reg = new RegExp('__expires__')
        let data = this.source
        let list = Object.keys(data)
        if (list.length > 0) {
            list.map((key, v) => {
                if (!reg.test(key)) {
                    let now = Date.now()
                    let expires = data[`${key}__expires__`] || Date.now + 1
                    if (now >= expires) {
                        this.remove(key)
                    }
                }
                return key
            })
        }
    }
    /**
     * @description 获取方法
     * @param {String} key 键
     * @returns value
     * @memberof Storage
     */
    get(key) {
        const source = this.source
        const expired = source[`${key}__expires__`] || Date.now + 1
        const now = Date.now()

        if (now >= expired) {
            this.remove(key)
            return
        }
        let value = source[key]
        if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
        return value
    }
    /**
     * @description 存储方法
     * @param {String} key 键
     * @param {String} value 值
     * @param {Number} expired 过期时间，单位分钟，非必填
     * @returns value
     * @memberof Storage
     */
    set(key, value, expired) {
        if (typeof value === typeof {}) value = JSON.stringify(value)
        let source = this.source
        source[key] = value
        if (expired) {
            source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired
        }
        return value
    }
    /**
     * @description 删除方法
     * @param {String} key 键
     * @returns value
     * @memberof Storage
     */
    remove(key) {
        const data = this.source
        const value = data[key]
        delete data[key]
        delete data[`${key}__expires__`]
        return value
    }
}

const utils = {
    CK,
    LS: new Storage(),
    plus,
    subtract,
    multiply,
    divide,
    deepClone
}

window.utils || (window.utils = utils)