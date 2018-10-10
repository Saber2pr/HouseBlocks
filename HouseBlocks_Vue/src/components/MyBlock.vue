<template>
  <div class="myBlock"
       :style="{'width': width, 'height': height, 'background-color': color}">
  </div>
</template>

<script>
export default {
  props: ['width', 'height', 'color', 'x', 'y'],
  mounted () {
    console.log('+ MyBlock', this.y)
  }
}
</script>

<style>
.myBlock {
  position: relative;
}
</style>
