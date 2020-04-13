# protobufjs.wechat
为微信小程序提供的 protobufjs 库

## 介绍

维护此库的根本原因还在于微信小程序屏蔽了 Function 和 eval 等动态执行代码方式，导致 protobufjs 官方库不可用。主体代码由 [Zhang19910325](https://github.com/Zhang19910325/protoBufferForWechat) 于官方库 [protobufjs](https://github.com/protobufjs/protobuf.js) 基础上改造而来。

感谢 Zhang19910325 的工作。


在这里fork的主要原因在于，原来版本工程风格并不符合我们团队规范，相关改造如下：

1. 增加了 npm 支持，而不是直接在各个工程中引用源码;
2. 调整目录结构；

我们仍然认为，代码最好的使用方式，应该是「引用」而不是「拷贝」，因此后续会重新梳理代码，希望将其中的改造能够变成 patch，进而直接使用官方仓库。此工作预计将会在 [美信拓扑的 protobufjs 仓库进行](https://github.com/maxim-top/protobuf.js)，也欢迎各位补充相关工作。

## 如何使用

当前库主要支持 [JSON descriptors](https://github.com/maxim-top/protobuf.js#using-json-descriptors) 模式，对应官方仓库的 protobufjs/light 可以直接参照官方文档，也可参照[原README](https://github.com/ericliang/protobufjs.wechat/blob/master/README.orig.md)。也就是说，如果在普通工程中使用的：
```
import protobuf from 'protobufjs/light';
```
只需要改成
```
import protobuf from 'protobufjs';
```
这个原因还在于微信小程序虽然支持npm，但并不支持子模块（我没有理解错的话）。

### 如何在微信小程序中增加 npm

1. 初始化 npm（一定不要忘记，这是微信小程序 npm 的一个奇怪bug）
```
$ npm init
```
2. 增加依赖
```
$ npm install -S --production ericliang/protobufjs.wechat 
```
3. 在微信小程序 IDE 菜单栏，选择「工具」，在点击「构建 NPM」，可以发现在 node_modules 同级目录中生成了 miniprogram_npm 的文件夹，那就大功告成啦。

### 如果依然报错： component is not found in path

检查 project.config.json 与 example 一致，重点检查两项，也就是 IDE 中的项目详情：

1. 确认勾选「启用 NPM 模块」；
2. 确认库版本号选择：2.10.4（或更高）;


祝玩得开心。
