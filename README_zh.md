# vue-css-loading

> 一个Vue CSS动画的loading插件。我们可以为将loading添加到使用特定选择器（document.querySelector支持的）的容器中。

[English Doc](https://github.com/szriafan/vue-css-loading/blob/master/README.md)

如果您喜欢本项目, 欢迎点赞，谢谢！

## 效果演示: [https://szriafan.github.io/vue-css-loading/](https://szriafan.github.io/vue-css-loading/)

## 用法

使用方法很简单，使用script标签或者NPM

``` bash

npm i vue-css-loading -S

// 给vue注册插件
import VueLoading from 'vue-css-loading';

// 导入样式
import VueLoading from 'vue-css-loading/lib/loading.css';

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

# 构建精简的线上版本
npm run build

# 构建线上版本并查看相关的分析报告
npm run build --report
```

想进一步了解构建工作原理, 请查看[指南](http://vuejs-templates.github.io/webpack/)和[vue-loader文档](http://vuejs.github.io/vue-loader)。
