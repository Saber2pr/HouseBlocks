const {ccclass, property} = cc._decorator;
import SceneMediator from './SceneMediator'
import {StartSceneInterface} from './SceneInterface'

@ccclass
export default class StartScene extends cc.Component implements StartSceneInterface {

    @property(cc.Button)
    startBtn: cc.Button = null;

    onLoad () {
        this.initUiEvents()
    }

    start () {
        
    }

    initUiEvents(): void{
        this.startBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoPlayScene()
        })
    }
}
