var Animation = require("AnimationMediator")

cc.Class({
    extends: cc.Component,

    properties: {
        startBtn:cc.Button,
        background:cc.Sprite,
        audio:cc.AudioClip
    },
    start () {
        this.startBtn.node.on("click", this.gotoPlayScene, this)
    },
    gotoPlayScene () {     
        cc.director.loadScene("PlayScene")
    },
    //注册定时器
    update (dt) {
        Animation.backgroundLoop(this.background, 64)
    },
    //注销定时器
    onDestroy () {
        this.unschedule(this.update)
    }
})
