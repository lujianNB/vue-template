/*
 * @Autor: 卢建
 * @LastEditors: 卢建
 * @Description: vue配置
 * @Date: 2020-11-18 17:30:23
 * @LastEditTime: 2021-02-24 13:27:41
 */
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '',

    // 用于多页配置，默认是 undefined
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js',　　/*这个是根入口文件*/
            // 模板文件
            template: 'public/index.html',
            // 输出文件
            filename: 'index.html',
            // 页面title
            title: 'vue项目模板'
        },
    },

    // 热更新
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        config.resolve.alias
            .set("@", resolve("src"))
    },

    // 配置 webpack-dev-server 行为。
    devServer: {
        open: true,
        proxy: {
            '': {
                target: 'http://sm2.asiic.cn:89',
                changeOrigin: true,
                ws: true,
            }
        },
    },
}