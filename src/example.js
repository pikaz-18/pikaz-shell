/*
 * @Author: zouzheng
 * @Date: 2020-06-19 09:32:45
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-19 15:35:48
 * @Description: 这是demo组件（页面）
 */
const shell = require("../lib/pikaz-shell")

shell([{ cmd: ["tree>tree1.txt", "tree>tree2.txt"] }, { cmd: ["mkdir pikaz-shell"], path: "D:\\" }])