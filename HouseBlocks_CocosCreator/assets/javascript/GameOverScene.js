var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties: {
        score:cc.Label,
        restartBtn:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.score.string = GlobalData.HouseVector.length
        this.restartBtn.node.on("click", this.gotoPlayScene, this)
    },

    gotoPlayScene () {
        cc.director.loadScene("PlayScene")
    }
    // update (dt) {},
});
