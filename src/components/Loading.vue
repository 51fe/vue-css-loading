<template>
  <div class="vue-loading overlay" v-if="isLoading">
    <div class="ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueLoading',
  props: {
    isLoading: false
  }
}
</script>

<style lang="scss">
.vue-loading.overlay {
  background: rgba(255, 255, 255, 0.6);
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .ball-pulse {
    display: block;
    transform: scale(1);
  }

  .ball-pulse > div:nth-child(1) {
    animation: ball-pulse-scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  .ball-pulse > div:nth-child(2) {
    animation: ball-pulse-scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  .ball-pulse > div:nth-child(3) {
    animation: ball-pulse-scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  .ball-pulse > div {
    background-color: #0FB560;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
  }

  @keyframes ball-pulse-scale {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    45% {
      transform: scale(0.1);
      opacity: 0.7;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
  }

}
</style>
