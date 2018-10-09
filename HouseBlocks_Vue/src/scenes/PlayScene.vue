<template>
  <main-layout :backgroundColor="backgroundColor">
    <my-button :text="backBtn.text"
               :fontSize="backBtn.fontSize"
               :color="backBtn.color"
               :x="backBtn.x"
               :y="backBtn.y"
               :next="backBtn.next"></my-button>
  </main-layout>
</template>

<script>
import MainLayout from '../layout/Main'
import MyButton from '../components/MyButton'

export default {
  components: {
    MainLayout,
    MyButton
  },
  data () {
    return {
      backgroundColor: '#a56164',
      backBtn: {
        text: 'back',
        fontSize: '150%',
        color: '#a56164',
        x: '-40%',
        y: '1%',
        next: ''
      }
    }
  }
}
</script>

<style>
</style>
