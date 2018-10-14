var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties: {
        //background
        background:cc.Sprite,
        //ui
        backBtn:cc.Button,
        //house
        house_onRope:cc.Node,
        house:cc.Node,
        audio:cc.AudioClip,
        //云朵图
        clouds:cc.Node,
    },

    onLoad () {
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true
        //设置重力加速度
        cc.director.getPhysicsManager().gravity = cc.v2(0, -320)
        //注册触摸监听
        this.background.node.on("touchstart", function(event){
            this.addHouse()
        }, this)
        //初始化全局数组
        GlobalData.HouseVector = []
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this) 
    },

    backToStartScene () {
        this.current = cc.audioEngine.play(this.audio, false, 1)
        cc.director.loadScene("StartScene")
    },

    addHouse () {
        //克隆节点
        var house = cc.instantiate(this.house)
        //设置父节点
        house.parent = this.node
        //得到绳子下端世界坐标
        var worldPoint = this.house_onRope.parent.convertToWorldSpaceAR(this.house_onRope)
        //转换到本地坐标
        var localPoint = this.node.convertToNodeSpace(worldPoint)
        //由于锚点错开0.5个身位需归位
        var pos = cc.v2(localPoint.x, localPoint.y - house.getContentSize().height/2)
        house.position = pos
        //提交到数据模型
        GlobalData.HouseVector.push(house)
    },
    update(dt){
        //云飘动速率
        this.clouds.x = 
            this.clouds.x < cc.winSize.width / 2? 
                this.clouds.x + 1: 
                0
    },
})
