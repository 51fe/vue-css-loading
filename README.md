# vue-css-loading

> A loading plugin with css animation. We can append it in a container with a special selector(document.querySelector support).

[中文文档](https://github.com/szriafan/vue-css-loading/blob/master/README_zh.md)

If you like the project, please star me, thanks!

## Live demo: [https://szriafan.github.io/vue-css-loading/](https://szriafan.github.io/vue-css-loading/)

## Usage

It is simple. Use script tag or NPM

``` bash

npm i vue-css-loading -S

// register the plugin on Vue
import Toasted from 'vue-css-loading';

// import style
import VueLoading from 'vue-css-loading/lib/loading.css';

Vue.use(VueLoading)

// you can call like this in any component

// show the loading in body by defualt
this.$loading.show()

// show the loading in the container with class name of .container 
this.$loading.show('.container')

// hide the current loading
this.$loading.hide();
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
