<template>
  <button class="myButton"
          :style="{fontSize: fontSize, color: '#a56164', top: y, left: x}"
          @click="go()">{{text}}</button>
</template>

<script>
/**
 * btn: {
        text: 'text',
        fontSize: 'fontSize%',
        color: '#color',
        x: 'x%',
        y: 'y%',
        next: 'name'
      }
 */
export default {
  props: ['text', 'fontSize', 'color', 'x', 'y', 'next'],
  methods: {
    go () {
      window.location.href = 'http://localhost:8081/#/' + this.next
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
