var GlobalData = require("GlobalData")

cc.Class({
    extends: cc.Component,

    properties: {
        //background
        backgroundColor:cc.Sprite,
        //ui
        backBtn:cc.Button,
        //house
        house_onRope:cc.Node,
        houseColor:cc.Sprite,
        house:cc.Node,
    },

    scoreString:null,
    randColor:GlobalData.randColor,

    onLoad () {
        // //建立物理世界
        // this.world = new p2.World();
        this.gravity = cc.v2(0, -320)
        
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true
        cc.director.getPhysicsManager().gravity = this.gravity

        //注册触摸监听
        this.backgroundColor.node.on("touchstart", function(event){
            cc.log("touched!")
            this.addHouse()
        }, this)

        //初始化全局数组
        GlobalData.HouseVector = []

        // this.backgroundColor.node.color = this.randColor()
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
        house.setPosition(this.house_onRope.x, this.house_onRope.y - height)

        var color = house.getComponent(cc.Graphics)
        color.rect(-width / 2, -height / 2, width, height)
        color.fillColor = this.randColor()
        color.fill()

        GlobalData.HouseVector.push(house)
        GlobalData.numFive = GlobalData.HouseVector.length%5 === 0
        cc.log(GlobalData.numFive)
    },


    //注册定时器
    update (dt) {
        if (GlobalData.numFive) {
            
        }
    },

    //注销定时器
    onDestroy () {
        this.unschedule(this.update)
    }
});
