var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties: {
        //background
        backgroundColor:cc.Sprite,
        scoreLabel:cc.Label,
        //ui
        backBtn:cc.Button,
        //house
        house_onRope:cc.Node,
        houseColor:cc.Sprite,
        house:cc.Node

    },

    scoreString:null,

    onLoad () {
        // //建立物理世界
        // this.world = new p2.World();
        this.gravity = cc.v2(0, -320)
        
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true
        cc.director.getPhysicsManager().gravity = this.gravity

        //获取碰撞管理者
        var manager = cc.director.getCollisionManager()
        manager.enabled = true

        //注册触摸监听
        this.backgroundColor.node.on("touchstart", function(event){
            cc.log("touched!")
            this.addHouse()
        }, this)

        //初始化全局数组
        GlobalData.HouseVector = []
        this.scoreString = this.scoreLabel.string

        this.backgroundColor.node.color = this.randColor()
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this) 
        this.houseColor.node.color = this.randColor()
        
    },

    backToStartScene () {
        cc.director.loadScene("StartScene")
    },

    addHouse () {
        var width = 50
        var height = 50

        var house = cc.instantiate(this.house)
        house.parent = this.backgroundColor.node
        house.setPosition(this.house_onRope.getPositionX(), this.house_onRope.getPositionY() - height)
        
        var color = house.getComponent(cc.Graphics)
        color.rect(-width / 2, -height / 2, width, height)
        color.fillColor = this.randColor()
        color.fill()

        GlobalData.HouseVector.push(house)
    },

    randColor () {
        var c1 = 55 + 200 * cc.random0To1()
        var c2 = 55 + 200 * cc.random0To1()
        var c3 = 55 + 200 * cc.random0To1()
        var c4 = 55 + 200 * cc.random0To1()
        return cc.color(c1, c2, c3, c4)
    },

    update (dt) {
        this.scoreLabel.string = this.scoreString + GlobalData.HouseVector.length
    }

});
