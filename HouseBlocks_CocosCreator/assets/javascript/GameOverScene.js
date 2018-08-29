var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties: {
        score:cc.Label,
        restartBtn:cc.Button,
        list:cc.Label,
    },

    start () {
        this.score.string = GlobalData.HouseVector.length
        GlobalData.scoreVector.push(this.score.string)
        //求最大值
        GlobalData.scoreVector.sort()
        this.list.string = GlobalData.scoreVector[GlobalData.scoreVector.length-1]
        this.restartBtn.node.on("click", this.gotoPlayScene, this)
    },

    gotoPlayScene () {
        cc.director.loadScene("PlayScene")
    }

});
