
cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        type:cc.Node,
        startBtn:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.startBtn.node.on("click", this.gotoPlayScene, this)
    },

    gotoPlayScene () {
        cc.director.loadScene("PlayScene")
    }
    // update (dt) {},
});
