# vue-css-loading

> 一个Vue CSS动画的loading插件。我们可以为将loading添加到使用特定选择器（document.querySelector支持的）的容器中。

[English Doc](https://github.com/szriafan/vue-css-loading/blob/master/README.md)

如果您喜欢本项目, 欢迎点赞，谢谢！

## 效果演示:

[演示](https://51fe.github.io/vue-css-loading/examples)

## 用法

使用方法很简单，使用script标签或者NPM

``` bash

npm i vue-css-loading -S
```

``` js
// 导入样式
import 'vue-css-loading/lib/index.css'
// 给vue注册插件
import VueLoading from 'vue-css-loading'

Vue.use(VueLoading)

// 在任意源组件中如下调用

// 默认在body显示loading
this.$loading.show()

// 在类名为.container的容器中显示loading
this.$loading.show('.container')

// 隐藏移除当前loading
this.$loading.hide();
```
## 构建

``` bash

# 安装依赖
npm install

# 构建umd库
npm run build-umd

# 开发环境下运行示例App
npm run start

# 构建示例App的线上版本
npm run build

```

想进一步了解构建工作原理, 请查看[vue-loader文档](http://vuejs.github.io/vue-loader)。
