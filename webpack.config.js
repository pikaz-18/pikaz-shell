/*
 * @Author: zouzheng
 * @Date: 2020-05-25 11:19:28
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-19 11:28:23
 * @Description: 这是webpack配置组件（页面）
 */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    "pikaz-shell": "./src/index.js",
    "example": "./src/example"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  target: 'node',
  node: {
    fs: 'empty',
    child_process: 'empty',
  }
};