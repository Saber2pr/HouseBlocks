var Animation = require("AnimationMediator")

cc.Class({
    extends: cc.Component,

    properties: {
        startBtn:cc.Button,
        background:cc.Sprite,
        hero:cc.Sprite,
        audio:cc.AudioClip
    },

    origin:null,
    onLoad () {
        this.origin = this.background.node.getPosition()
    },

    start () {
        this.startBtn.node.on("click", this.delayToReplaceScene, this)
    },

    delayToReplaceScene () {
        this.current = cc.audioEngine.play(this.audio, false, 1)
        var moveTo = cc.moveTo(1, cc.p(this.hero.node.x, this.hero.node.y-200))
        var rotateBy = cc.rotateBy(1, 360)
        var spa = cc.spawn(moveTo, rotateBy)
        this.hero.node.runAction(spa)
        this.scheduleOnce(this.gotoPlayScene, 1)
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

});
