<template>
  <div>
    <main-layout :backgroundColor="backgroundColor">
      <my-label :text="label.text"
                :fontSize="label.fontSize"
                :color="label.color"
                :y="label.y"></my-label>
      <my-button :text="startBtn.text"
                 :fontSize="startBtn.fontSize"
                 :color="startBtn.color"
                 :y="startBtn.y"
                 :path="startBtn.path"></my-button>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '../layout/Main'
import MyLabel from '../components/MyLabel'
import MyButton from '../components/MyButton'

export default {
  components: {
    MainLayout,
    MyLabel,
    MyButton
  },
  data () {
    return {
      backgroundColor: '#61a3a5',
      label: {
        text: 'HouseBlocks',
        fontSize: '150%',
        color: '#a56164',
        y: '10%'
      },
      startBtn: {
        text: 'start',
        fontSize: '150%',
        color: '#a56164',
        y: '300px',
        path: 'PlayScene'
      }
    }
  },
  mounted () {
    console.log('+ StartScene')
  }
}
</script>

<style>
.test {
  color: #a56164;
}
</style>
