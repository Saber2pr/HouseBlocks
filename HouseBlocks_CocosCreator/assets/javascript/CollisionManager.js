var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties:{
        backgroundColor:cc.Sprite
    },
    //碰撞初
    onBeginContact (contact,selfCollider,otherCollider){
        cc.log("contactBegin!")
        //获取碰撞的世界信息
        var worldManifold = contact.getWorldManifold()
        //获取碰撞点的世界坐标[0:vec2, 1:vec2, ...]
        var points = worldManifold.points
        //判断触地
        if (GlobalData.HouseVector.length > 2 && points[0].y < 1) {
            
            cc.director.loadScene("GameOverScene")
        }
    }

    // update (dt) {},
});
