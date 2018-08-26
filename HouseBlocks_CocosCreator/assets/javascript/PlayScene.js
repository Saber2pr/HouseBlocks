
cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        type:cc.Node,
        backBtn:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true;  
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this)
    },

    backToStartScene () {
        cc.director.loadScene("StartScene")
    }
    // update (dt) {},
});
