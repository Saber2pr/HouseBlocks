
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //获取碰撞管理者
        var manager = cc.director.getCollisionManager()
        manager.enabled = true
        //debug框
        manager.enabledDebugDraw = true
        manager.enabledDrawBoundingBox = true
    },

    start () {

    },

    onCollisionEnter (other, self) {
        cc.log("contact!")
    },

    // update (dt) {},
});
