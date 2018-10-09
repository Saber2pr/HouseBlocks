<template>
  <p class="myLabel"
     :style="{fontSize: fontSize, color: color, top: y, left: x}">{{text}}</p>
</template>

<script>
/**
 * label: {
        text: 'text',
        fontSize: 'fontSize%',
        color: '#color',
        x: 'x%',
        y: 'y%'
      },
 */
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
