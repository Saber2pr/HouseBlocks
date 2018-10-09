<template>
  <div id="app">
    <center>
      <router-view />
    </center>
  </div>
</template>

<script>
import StartScene from './scenes/StartScene'
import PlayScene from './scenes/PlayScene'

export default {
  components: {
    StartScene,
    PlayScene
  }
}
</script>

<style>
</style>
