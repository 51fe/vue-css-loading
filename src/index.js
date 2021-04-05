import VueLoading from './components/Loading'

let instance

const install = function(Vue, options) {
  if (install.installed) return
  Vue.component('VueLoading', VueLoading)
  if (!instance) {
    const LoadingPlugin = Vue.extend(VueLoading);
    instance = new LoadingPlugin({
      el: document.createElement('div')
    });
  }

  Vue.prototype.$loading = {
    show(selector) {
      instance.isLoading = true;
      document.querySelector(selector || 'body').appendChild(instance.$el);
    },
    hide() {
      instance.isLoading = false;
    }
  }
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VueLoading
}
