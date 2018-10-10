<template>
  <main-layout :backgroundColor="backgroundColor">
    <my-button :text="backBtn.text"
               :fontSize="backBtn.fontSize"
               :color="backBtn.color"
               :x="backBtn.x"
               :y="backBtn.y"
               :path="backBtn.path"></my-button>
    <my-block :width="rope.width"
              :height="rope.height"
              :color="rope.color"
              :y="rope.y">
    </my-block>
    <my-block :width="block.width"
              :height="block.height"
              :color="block.color"></my-block>
  </main-layout>
</template>

<script>
import MainLayout from '../layout/Main'
import MyButton from '../components/MyButton'
import MyBlock from '../components/MyBlock'

export default {
  components: {
    MainLayout,
    MyButton,
    MyBlock
  },
  data () {
    return {
      backgroundColor: '#a56164',
      backBtn: {
        text: 'back',
        fontSize: '150%',
        color: '#a56164',
        x: '-40%',
        y: '3px',
        path: ''
      },
      block: {
        width: '50px',
        height: '50px',
        color: 'blue'
      },
      rope: {
        width: '10px',
        height: '70px',
        color: 'red',
        y: '-10px'
      }
    }
  }
}
</script>

<style>
</style>
