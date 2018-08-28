var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties:{
        scoreLabel:cc.Label,
        bottom:cc.Node,
        backgroundColor:cc.Sprite
    },
    //碰撞初
    onBeginContact (contact,selfCollider,otherCollider){
        //获取碰撞的世界信息
        var worldManifold = contact.getWorldManifold()
        //获取碰撞点的世界坐标[0:vec2, 1:vec2, ...]
        var points = worldManifold.points
        //判断触地
        if (GlobalData.HouseVector.length > 1 && points[0].y < 1) {
            //这里会报错不过可以忽略
            cc.director.loadScene("GameOverScene")
        }
        this.scoreLabel.string = "分数：" + GlobalData.HouseVector.length
        if (points[0].y > cc.winSize.height/4) {
            var dorpAction = cc.moveTo(0.5, cc.v2(this.bottom.x, this.bottom.y - GlobalData.HouseVector[0].getContentSize().height))
            this.bottom.runAction(dorpAction)
            for (var house of GlobalData.HouseVector) {
                var dorpAction = cc.moveTo(0.5, house.x, house.y - house.getContentSize().height)
                house.runAction(dorpAction)
            }
        }
        if (GlobalData.HouseVector.length > 2) {
            var tintTo = cc.tintTo(2.0, 120.0, 232.0, 254.0)
            var tintBy = cc.tintBy(2, 120, 232, 254)
            var tintTo1 = cc.tintTo(0, 0, 0, 0)
            var seq = cc.sequence(tintTo, tintBy, tintTo1)
            this.backgroundColor.node.runAction(seq)
        }
    }
})
