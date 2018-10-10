<template>
  <button class="myButton"
<<<<<<< HEAD
          :style="{'font-size': fontSize, 'color': color, 'top': y, 'left': x}"
=======
          :style="{fontSize: fontSize, color: color, top: y, left: x}"
>>>>>>> 7b09a613b3562b2e1b107edf4b666cc43b998479
          @click="go()">{{text}}</button>
</template>

<script>
export default {
  props: ['text', 'fontSize', 'color', 'x', 'y', 'path'],
  methods: {
    go () {
      window.location.href = this.$root.root + this.path
    }
  },
  mounted () {
    console.log('+ MyButton')
  }
}
</script>

<style>
.myButton {
  position: relative;
}
</style>
