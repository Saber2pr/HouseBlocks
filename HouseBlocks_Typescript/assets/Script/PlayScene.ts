const {ccclass, property} = cc._decorator;
import PlaySceneInterface from './PlaySceneInterface'
import SceneMediator from './SceneMediator'
import Factory from './Factory'

@ccclass
export default class PlayScene extends cc.Component implements PlaySceneInterface {

    @property(cc.Button)
    backBtn: cc.Button = null;
    @property(cc.Prefab)
    housePrefab: cc.Prefab = null;
    @property(cc.Sprite)
    background: cc.Sprite = null;

    private houseFactory: Factory = null;

    onLoad () {
        this.initUiEvents();
        this.initTouchEvents();
        this.initFactorys();
    }

    start () {
        
    }

    initFactorys(): void {
        this.houseFactory = new Factory(
            cc.instantiate(this.housePrefab),
            10
        );
    }

    initUiEvents(): void {
        this.backBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoStartScene();
        });
    }

    initTouchEvents():void {
        this.background.node.on('touchstart', ()=>{
            console.log("touch!");
            this.addHouse();
        })
    }

    addHouse(): void {
        let node: cc.Node = this.houseFactory.export();
        //let worldPoint: cc.Vec2 = node.parent.convertToWorldSpace(node.position)
        //let localPoint: cc.Vec2 = this.background.node.convertToNodeSpace(worldPoint)
        node.parent = this.background.node;
        node.position = cc.p(0, 0)
    }
    // update (dt) {}
}