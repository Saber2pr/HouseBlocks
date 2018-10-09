import Vue from 'vue'
import Router from 'vue-router'
import StartScene from '../scenes/StartScene.vue'
import PlayScene from '../scenes/PlayScene.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'StartScene',
    component: StartScene
  },
  {
    path: '/PlayScene',
    name: 'PlayScene',
    component: PlayScene
  }
  ]
})
