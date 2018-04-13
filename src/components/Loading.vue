<template>
  <div class="overlay" v-if="isLoading">
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
