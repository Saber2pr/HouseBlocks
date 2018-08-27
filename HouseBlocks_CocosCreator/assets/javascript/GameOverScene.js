
cc.Class({
    extends: cc.Component,

    properties: {
        score:cc.Label,
        restartBtn:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.restartBtn.node.on("click", this.gotoPlayScene, this)
    },

    gotoPlayScene () {
        cc.director.loadScene("PlayScene")
    }
    // update (dt) {},
});
