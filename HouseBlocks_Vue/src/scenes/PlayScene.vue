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
              :color="block.color"
              :y="vpos.y + 'px'"></my-block>
  </main-layout>
</template>

<script>
import MainLayout from '../layout/Main'
import MyButton from '../components/MyButton'
import MyBlock from '../components/MyBlock'
import scheduleUpdate from '../common/js/Scheduler.js'
import cpSpace from '../common/js/cpSpace.js'
import Vue from 'vue'

const UNIT_P = 10000000
const UNIT_M = 1000
const DELTA = 1000 / 60
const GRAVITY = 1000

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
      vpos: {
        x: null,
        y: null
      },
      space: null
    }
  },
  computed: {
    block () {
      let width = 50
      let height = 50
      let color = 'blue'
      let mass = width * height / UNIT_M
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
      console.log('! update')
      this.forceUpdateData()
      this.space.step(dt)
    },
    initSpace () {
      this.space = cpSpace()
      this.space.setGravity(GRAVITY)
      this.block.body = this.space.addBody(this.block.body)
    },
    pos () {
      return {
        x: this.block.body.p.x / UNIT_P,
        y: this.block.body.p.y / UNIT_P
      }
    },
    forceUpdateData () {
      Vue.set(this.vpos, 'y', this.pos().y)
    }
  },
  created () {
    this.schedule = scheduleUpdate(this.update, DELTA)
    this.initSpace()
  },
  mounted () {
    console.log('+ PlayScene')
  },
  beforeDestroy () {
    this.schedule.unscheduleUpdate()
    console.log('- destroy PlayScene')
  }
}
</script>

<style>
</style>
