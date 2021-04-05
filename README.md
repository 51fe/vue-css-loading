# vue-css-loading

> A loading plugin with css animation. We can append it in a container with a special selector(document.querySelector support).

## [中文文档](https://github.com/szriafan/vue-css-loading/blob/master/README_zh.md)

If you like the project, please star me, thanks!

## Live demo:
[Demo](https://szriafan.github.io/vue-css-loading/examples/)

## Usage

It is simple. Use script tag or NPM

``` bash

npm i vue-css-loading -S
```

``` js
// import style
import 'vue-css-loading/lib/vue-css-loading.css'

// register the plugin on Vue
import VueLoading from 'vue-css-loading'

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

# build for library with umd
npm run build-umd

# serve example App with
npm run dev

# build example App for production with minification
npm run build

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
