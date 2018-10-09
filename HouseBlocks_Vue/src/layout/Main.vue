<template>
  <div class="canvas"
       :style="{backgroundColor: backgroundColor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['backgroundColor'],
  mounted () {
    console.log('+ MainLayout')
  }
}
</script>

<style>
.canvas {
  width: 360px;
  height: 600px;
}
</style>
