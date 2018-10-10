<template>
  <p class="myLabel"
     :style="{'font-size': fontSize, 'color': color, 'top': y, 'left': x}">{{text}}</p>
</template>

<script>
export default {
  props: ['text', 'fontSize', 'color', 'x', 'y'],
  mounted () {
    console.log('+ MyLabel')
  }
}
</script>

<style>
.myLabel {
  position: relative;
}
</style>
