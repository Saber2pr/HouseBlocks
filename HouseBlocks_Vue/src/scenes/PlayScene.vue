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
    <my-block :width="block.width + 'px'"
              :height="block.height + 'px'"
              :color="block.color"></my-block>
  </main-layout>
</template>

<script>
import MainLayout from '../layout/Main'
import MyButton from '../components/MyButton'
import MyBlock from '../components/MyBlock'
import cp from 'chipmunk'

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
      rope: {
        width: '10px',
        height: '70px',
        color: 'red',
        y: '-10px'
      },
      space: null
    }
  },
  computed: {
    block () {
      let width = 50
      let height = 50
      let color = 'blue'
      let mass = width * height * 1 / 1000
      return {
        mass,
        width,
        height,
        color
      }
    }
  },
  methods: {
    initPhysicSpace () {
      this.space = new cp.Space()
      this.space.gravity = cp.v(0, -1000)
      let body = new cp.Body(this.block.mass, cp.momentForBox(this.block.mass, this.block.width, this.block.height))
      this.space.addBody(body)
      console.log(body)
    }
  },
  mounted () {
    console.log('+ PlayScene', this.block.mass)
    this.initPhysicSpace()
  }
}
</script>

<style>
</style>
