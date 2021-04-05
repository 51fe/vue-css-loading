<template>
  <div id="app" v-if="showToolbar" v-cloak>
    <div class="toolbar">
      <select v-model="selected" @change="show(selected)">
        <option value="">Default</option>
        <option value=".top">Top</option>
        <option value=".left">Left</option>
        <option value=".right">Right</option>
        <option value=".bottom">Bottom</option>
      </select>
    </div>
    <div class="top"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueLoading from '../lib/index'
import '../lib/index.css'

Vue.use(vueLoading);

let intervalId;
export default {
  name: "App",
  data() {
    return {
      showToolbar: false,
      selected: "",
    };
  },

  created() {
    this.show();
  },

  methods: {
    show(selector = "") {
      if (intervalId) {
        clearTimeout(intervalId);
      }

      if (selector == "") {
        this.showToolbar = false;
      }

      this.$loading.show(selector);
      intervalId = setTimeout(() => {
        this.$loading.hide();
        if (selector == "") {
          this.showToolbar = true;
        }
      }, 3000);
    },
  },
};
</script>

<style>
body {
  position: absolute;
  margin: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.loading {
  background-color: #999;
}

.toolbar {
  height: 60px;
  line-height: 60px;
  width: 100%;
}

select {
  height: 30px;
  padding: 5px 10px;
  margin-left: 32px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

button:hover {
  border-color: #ddd;
}

.top {
  position: absolute;
  top: 60px;
  height: 100px;
  width: 100%;
  background-color: #ddd;
}

.left {
  position: absolute;
  top: 160px;
  bottom: 100px;
  left: 0;
  right: 50%;
  margin: 20px 10px 20px 0;
  background-color: #ddd;
}

.right {
  position: absolute;
  top: 160px;
  bottom: 100px;
  left: 50%;
  right: 0;
  margin: 20px 0 20px 10px;
  background-color: #ddd;
}

.bottom {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: #ddd;
}
.show {
  display: block !important;
}
</style>
