!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(e){const r=n(1).promisify(n(2).exec),o=n(3),i=n(4),u=e=>{const t=e=>(e=e.toString())[1]?e:"0"+e,n=new Date,r=n.getFullYear(),o=t(n.getMonth()+1),i=t(n.getDate()),u=t(n.getHours()),c=t(n.getMinutes()),f=t(n.getSeconds());return"date"===e?`${r}-${o}-${i}`:"time"===e?`${r}-${o}-${i} ${u}:${c}:${f}`:void 0},c=u("date"),f=u("time"),l=t=>{const n=i.join(e,"log"),r=i.join(e,"log",c+".txt");o.existsSync(n)||o.mkdirSync(n),o.existsSync(r)?o.appendFileSync(r,`${f}  ${t}; \n`):o.writeFileSync(r,`${f}  ${t}; \n`)};t.default=async e=>{for(let t=0;t<e.length;t++){const{cmd:n,path:o,timeout:i}=e[t],u=n.reduce((e,t,n)=>0===n?e+t:e+" && "+t,""),{error:c,stdout:f,stderr:s}=await r(u,{cwd:o||null,timeout:i||0});if(c)return l(c),!1}return console.log("完成"),!0}}.call(this,"/")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")}])}));