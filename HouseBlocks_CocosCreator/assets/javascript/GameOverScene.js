var GlobalData = require("GlobalData")
var Animation = require("AnimationMediator")

cc.Class({
    extends: cc.Component,

    properties: {
        score:cc.Label,
        restartBtn:cc.Button,
        list:cc.Label,
        background:cc.Sprite,
        audio:cc.AudioClip
    },

    start () {
        this.score.string = GlobalData.HouseVector.length
        GlobalData.scoreVector.push(this.score.string)
        //求最大值
        this.list.string = Math.max.apply(null, GlobalData.scoreVector)
        this.restartBtn.node.on("click", this.gotoPlayScene, this)
    },

    gotoPlayScene () {
        this.current = cc.audioEngine.play(this.audio, false, 1)
        cc.director.loadScene("PlayScene")
    },

    update () {
        Animation.backgroundLoop(this.background, 64)

    },

    onDestroy () {
        this.unschedule(this.update)
    }

});
