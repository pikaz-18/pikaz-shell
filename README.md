<!--
 * @Author: zouzheng
 * @Date: 2020-05-25 11:34:55
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-19 14:46:17
 * @Description: 这是XXX组件（页面）
--> 
## Introduction

简单封装的执行命令的node脚本。

## Installation

### With npm or yarn 

```bash
yarn add pikaz-shell

npm i -S pikaz-shell
```

## For Typical use
以windows操作系统为例
``` js
const shell = require("./index")
shell([{ cmd: ["tree>tree1.txt","tree>tree2.txt"],{ cmd: ["mkdir pikaz-shell"], path: "D:\\" } }])
```

### [Demo代码](https://github.com/pikaz-18/pikaz-shell/blob/master/src/example.js)

### Methods:

方法名|说明|参数
-|-|-
shell|导出函数|function([attributes](#shell-Attributes))

<h3 id="shell-Attributes">shell-Attributes:Object[]</h3>

参数|说明|类型|可选值|默认值
-|-|-|-|-
cmd|需执行的命令|String[]|--|--
path|进程的当前工作目录|string|--|null(执行node文件的当前目录)
timeout|超时时间|number|--|0


