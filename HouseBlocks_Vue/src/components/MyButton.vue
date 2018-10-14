<template>
  <button class="myButton"
          :style="{'font-size': fontSize, 'color': color, 'top': y, 'left': x}"
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
