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
    
    onLoad() {
        this.restartBtn.node.on("click", this.gotoPlayScene, this)
    },

    start () {
        //显示到view层
        this.score.string = GlobalData.HouseVector.length
        //提交到数据模型
        GlobalData.scoreVector.push(this.score.string)
        //求最大值
        this.list.string = Math.max.apply(null, GlobalData.scoreVector)
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
})
