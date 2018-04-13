import Loading from './components/Loading'
import './components/loading.css'

let instance

const VueLoading = {
  install(Vue, options) {

    if (!instance) {
      const LoadingPlugin = Vue.extend(Loading);
      instance = new LoadingPlugin({
        el: document.createElement('div')
      });
    }

    let loading = {
      show(sellector) {
        instance.isLoading = true;
        document.querySelector(sellector || 'body').appendChild(instance.$el);
      },
      hide() {
        instance.isLoading = false;
      }
    };

    if (!Vue.$loading) {
      Vue.$loading = loading;
    }

    Vue.prototype.$loading = Vue.$loading
  }
}

export default VueLoading

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(VueLoading)
}

