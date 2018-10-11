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
      space: null,
      scheduleUpdate: null
    }
  },
  computed: {
    block () {
      let width = 50
      let height = 50
      let color = 'blue'
      let mass = width * height * 1 / 1000
      let body = {
        mass,
        width,
        height
      }
      return {
        mass,
        width,
        height,
        color,
        body
      }
    }
  },
  methods: {
    update (dt) {
      this.scheduleUpdate = dt === undefined ? null : setInterval(this.update, dt)
      console.log('! update')
    },
    initPhysicSpace (space) {
      space = new cp.Space()
      return {
        setGravity (gravity) {
          space.gravity = cp.v(0, gravity)
          return {
            addBody (body) {
              body = new cp.Body(body.mass, cp.momentForBox(body.mass, body.width, body.height))
              space.addBody(body)
              console.log(body)
            }
          }
        }
      }
    }
  },
  created () {
    this.update(1000)
  },
  mounted () {
    console.log('+ PlayScene', this.block.body.mass)
    this.initPhysicSpace(this.space)
      .setGravity(-1000)
      .addBody(this.block.body)
  },
  beforeDestroy () {
    clearInterval(this.scheduleUpdate)
    console.log('- destroy PlayScene')
  }
}
</script>

<style>
</style>
