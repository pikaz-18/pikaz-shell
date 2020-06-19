/*
 * @Author: zouzheng
 * @Date: 2020-06-18 17:47:11
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-19 15:22:13
 * @Description: 这是执行命令组件（页面）
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');

/**
 * @name: 执行命令行
 * @param {Array} cmd/执行命令语句
 * @param {String} path/执行命令的路径
 * @param {Number} timeout/执行命令的超时时间
 * @return: {Boolean} 是否执行成功
 */
const shell = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const { cmd, path, timeout } = arr[i]
    // 组装执行命令
    const command = cmd.reduce((total, item, index) => {
      if (index === 0) {
        return total + item
      } else {
        return total + ` && ${item}`
      }
    }, '')
    const { error, stdout, stderr } = await exec(command, { cwd: path || null, timeout: timeout || 0 });
    if (error) {
      // 打印错误日志
      log(error)
      return false
    }
  }
  console.log("完成")
  return true
}

/**
 * @name: 当前时间
 * @param {String} type/date为日期，time精确到秒
 * @return: {String} 当前时间
 */
const timeStr = (type) => {
  const zeroFill = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  const date = new Date()
  const year = date.getFullYear()
  const month = zeroFill(date.getMonth() + 1)
  const day = zeroFill(date.getDate())
  const hour = zeroFill(date.getHours())
  const minute = zeroFill(date.getMinutes())
  const second = zeroFill(date.getSeconds())
  if (type === "date") {
    return `${year}-${month}-${day}`
  }
  if (type === "time") {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
}
// 当前日期
const date = timeStr("date")
// 当前时间
const time = timeStr("time")

/**
 * @name: 输出错误日志
 * @param {type} error/错误信息
 * @return: 
 */
const log = error => {
  const logPath = path.join(__dirname, "log")
  const txtPath = path.join(__dirname, "log", `${date}.txt`)
  if (!fs.existsSync(logPath)) {
    // 不存在log目录，则创建
    fs.mkdirSync(logPath)
  }
  if (!fs.existsSync(txtPath)) {
    // 不存在错误日志文件，则创建
    fs.writeFileSync(txtPath, `${time}  ${error}; \n`)
  } else {
    // 存在则追加错误信息
    fs.appendFileSync(txtPath, `${time}  ${error}; \n`)
  }
}

module.exports = shell
