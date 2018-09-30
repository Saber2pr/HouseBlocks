/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:14 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 21:49:45
 */
const {ccclass, property} = cc._decorator;
import {PlaySceneInterface} from './SceneInterface'
import SceneMediator from './SceneMediator'
import Model from './Model'
/**
 *View
 *
 * @export
 * @class PlayScene
 * @extends {cc.Component}
 * @implements {PlaySceneInterface}
 */
@ccclass
export default class PlayScene extends cc.Component implements PlaySceneInterface {

    @property(cc.Button)
    backBtn: cc.Button = null;
    @property(cc.Prefab)
    housePrefab: cc.Prefab = null;
    @property(cc.Sprite)
    background: cc.Sprite = null;
    @property(cc.Sprite)
    house_onRope: cc.Sprite = null;
    @property(cc.Label)
    scoreLabel: cc.Label = null;
    @property(cc.Node)
    bottom: cc.Node = null;
    @property(cc.Sprite)
    ground: cc.Sprite = null;
    @property(cc.Sprite)
    cloud: cc.Sprite = null;

    onLoad (): void {
        this.initModelData();
        this.initView();
        this.initUiEvents();
        this.initTouchEvents();
        this.initCustomEvent();
        this.initPhysics();
    }

    start(): void {

    }

    initModelData(): void {
        Model.getInstance().groundHeight = this.bottom.y;
        Model.getInstance().houseSize = this.house_onRope.node.getContentSize()
        Model.getInstance().score = 0;
        Model.getInstance().houseGroup = new Array<cc.Node>();
    }

    initView(): void {
        this.scoreLabel.string = "0";
    }

    initUiEvents(): void {
        this.backBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoStartScene();
        });
    }

    initTouchEvents():void {
        this.background.node.on('touchstart', ()=>{
            this.addHouse();
        })
    }

    initCustomEvent(): void{
        this.node.on('scoreUp', (event)=>{
            this.scoreLabel.string = Model.getInstance().score.toString();
            SceneMediator.getInstance().playAudio()
            event.stopPropagation();
        });
        this.node.on('bottomDown', (event)=>{
            function nextPos(pos: cc.Vec2, step: number): cc.Vec2 {
                return cc.v2(pos.x, pos.y - step);
            }
            let step = this.house_onRope.node.getContentSize().height/2
            this.bottom.runAction(cc.moveTo(0.5, nextPos(this.bottom.position, step)));
            this.ground.node.runAction(cc.moveTo(0.5, nextPos(this.ground.node.position, step/5)));
            for(const house of Model.getInstance().houseGroup){
                house.runAction(cc.moveTo(0.5, nextPos(house.position, step)));
            }
            event.stopPropagation();
        })
        this.node.on('dark', (event)=>{
            let colorEle = 255 - Model.getInstance().houseGroup.length * (255/20);
            this.background.node.runAction(cc.tintTo(0.5, colorEle, colorEle, colorEle));
            event.stopPropagation();
        })
        this.node.on('gameover', (event)=>{
            SceneMediator.getInstance().gotoOverScene();
        })
    }

    initPhysics(): void {
        let pm: cc.PhysicsManager = cc.director.getPhysicsManager();
        pm.enabled = true;
        pm.gravity = cc.v2(0, -620);
    }

    addHouse(): void {
        let node: cc.Node = cc.instantiate(this.housePrefab);
        let targetNode: cc.Node = this.house_onRope.node;
        let worldPoint: cc.Vec2 = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
        let localPoint: cc.Vec2 = this.background.node.convertToNodeSpaceAR(worldPoint);
        let pos: cc.Vec2 = cc.v2(localPoint.x, localPoint.y - node.height/2);
        node.parent = this.background.node;
        node.position = pos;
        Model.getInstance().houseGroup.push(node);
        Model.getInstance().score++;
    }

    update(dt) {
        this.cloud.node.x = 
        this.cloud.node.x < cc.winSize.width / 2? 
        this.cloud.node.x + 1: 0
    }
}