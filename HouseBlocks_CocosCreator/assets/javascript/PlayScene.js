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

    HouseVector:null,
    scoreString:null,

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

        //初始化数组容器
        this.HouseVector = []
        this.scoreString = this.scoreLabel.string
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this)
        
        this.houseColor.node.color = this.randColor()
    },

    backToStartScene () {
        cc.director.loadScene("StartScene")
    },

    addHouse () {
        var house = cc.instantiate(this.house)
        house.parent = this.backgroundColor.node
        house.setPosition(this.house_onRope.getPositionX(), this.house_onRope.getPositionY() - 70)
        // cc.log(house.getPositionX())
        this.HouseVector.push(house)
    },

    randColor () {
        var c1 = 55 + 200 * cc.random0To1()
        var c2 = 55 + 200 * cc.random0To1()
        var c3 = 55 + 200 * cc.random0To1()
        var c4 = 55 + 200 * cc.random0To1()
        return cc.color(c1, c2, c3, c4)
    },

    posTest (vector) {
        if (vector.length > 1) {
            for (var i = 0; i < vector.length; i++) {
                var x = vector[i].getPositionX() + cc.width / 2
                cc.log(x)
                if (x < 0 || x > cc.winSize.width) {
                    cc.log("house x :" + vector[i].x)
                    cc.director.loadScene("GameOverScene")
                }
            }
        }
    },

    update (dt) {
        this.scoreLabel.string = this.scoreString + this.HouseVector.length
        // this.posTest(this.HouseVector)
    }

});
