var GlobalData = require("GlobalData")
var Animation = require("AnimationMediator")

cc.Class({
    extends: cc.Component,

    properties: {
        //background
        background:cc.Sprite,
        //ui
        backBtn:cc.Button,
        //house
        house_onRope:cc.Node,
        houseColor:cc.Sprite,
        house:cc.Node,
        audio:cc.AudioClip
    },

    randColor:GlobalData.randColor,

    onLoad () {
        // //建立物理世界
        this.gravity = cc.v2(0, -320)
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true
        cc.director.getPhysicsManager().gravity = this.gravity

        //注册触摸监听
        this.background.node.on("touchstart", function(event){
            cc.log("touched!")
            this.addHouse()
        }, this)

        //初始化全局数组
        GlobalData.HouseVector = []

        // this.background.node.color = this.randColor()
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this) 
        this.houseColor.node.color = this.randColor()
        
    },

    backToStartScene () {
        this.current = cc.audioEngine.play(this.audio, false, 1)
        cc.director.loadScene("StartScene")
    },

    addHouse () {
        var width = 50
        var height = 50

        var house = cc.instantiate(this.house)
        house.parent = this.node
        house.setPosition(this.house_onRope.x, this.house_onRope.y)

        GlobalData.HouseVector.push(house)
        if (GlobalData.HouseVector.length%5 === 0) {
            this.gravity = cc.v2(this.gravity.x, this.gravity.y-200)
        }
    },

    //注册定时器
    update (dt) {
        Animation.backgroundLoop(this.background, 24)
    },

    //注销定时器
    onDestroy () {
        this.unschedule(this.update)
    }

});
