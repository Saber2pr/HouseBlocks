cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        type:cc.Node,

        //ui
        backBtn:cc.Button,
        
        //物理根节点接口
        physicsSpace:cc.Node,
        house_onRope:cc.Node,

    },

    // //这里使用p2物理引擎插件
    // world:null,
    // gravity:null,

    //刚体
    houseBody:null,
    houseShape:null,

    //渲染精灵
    house:cc.Sprite,

    onLoad () {
        // //建立物理世界
        // this.world = new p2.World();
        this.gravity = cc.v2(0, -320);
        
        // 启用物理引擎相关功能  
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = this.gravity;  
    },

    start () {
        this.backBtn.node.on("click", this.backToStartScene, this);

        // this.addHouse();
    },

    backToStartScene () {
        cc.director.loadScene("StartScene")
    },

    addHouse () {
        // this.houseBody = new p2.Body({});
    }
    // update (dt) {},
});
