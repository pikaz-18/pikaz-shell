/*
 * @Author: zouzheng
 * @Date: 2020-06-18 17:47:11
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-18 18:19:20
 * @Description: 这是XXX组件（页面）
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

/**
 * @name: 执行命令行
 * @param {cmd}} 
 * @param {path}} 
 * @param {cmd}} 
 * @return: 
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
      return console.log(error)
    }
  }
  return true
}

// export default shell
shell([{ cmd: ["tree>tree.txt", "tree>tree2.txt"], path: "F:/\workspace/\layui" }, { cmd: ["tree>tree.txt"] }]);