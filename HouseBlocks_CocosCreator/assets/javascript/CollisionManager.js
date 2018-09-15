var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties:{
        scoreLabel:cc.Label,
        //地面刚体
        bottom:cc.Node,
        //地面贴图
        //天空背景图
        background:cc.Sprite,
        ground:cc.Node,
        audio:cc.AudioClip
    },
    //碰撞初
    onBeginContact (contact,selfCollider,otherCollider){
        //获取碰撞的世界信息
        var worldManifold = contact.getWorldManifold()
        //获取碰撞点的世界坐标[0:vec2, 1:vec2, ...]
        var points = worldManifold.points
        //判断触地
        if (GlobalData.HouseVector.length > 1 && points[0].y < 20) {
            cc.director.loadScene("GameOverScene")
        }
        //获取数据
        this.scoreLabel.string = GlobalData.HouseVector.length
        if (points[0].y > cc.winSize.height/4) {
            //地面刚体下降动作
            var dorpAction = cc.moveTo(0.5, cc.v2(
                        this.bottom.x, 
                        this.bottom.y - GlobalData.HouseVector[0].getContentSize().height))
            this.bottom.runAction(dorpAction)
            //地面图片精灵下降动作
            this.ground.runAction(cc.moveTo(0.5, cc.v2(
                            this.ground.x, 
                            this.ground.y - 5)))
            //天空背景加深,步长值255/20
            var colorEle = 255 - GlobalData.HouseVector.length * (255/20)
            this.background.node.runAction(cc.tintTo(0.5, colorEle, colorEle, colorEle))
            //遍历所有house同步执行动作，由于父子节点未同步
            for (var house of GlobalData.HouseVector) {
                var dorpAction = cc.moveTo(0.5, house.x, house.y - house.getContentSize().height)
                house.runAction(dorpAction)
            }
        }
        //碰撞音效
        this.current = cc.audioEngine.play(this.audio, false, 1)
    },
})
