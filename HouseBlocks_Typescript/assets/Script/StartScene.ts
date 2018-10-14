/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:32 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 22:29:09
 */
const {ccclass, property} = cc._decorator;
import SceneMediator from './SceneMediator'
import {StartSceneInterface} from './SceneInterface'
import Model from './Model'

@ccclass
export default class StartScene extends cc.Component implements StartSceneInterface {

    @property(cc.Button)
    startBtn: cc.Button = null;
    @property(cc.AudioClip)
    audio: cc.AudioClip = null;

    onLoad () {
        this.initModelData();
        this.initUiEvents();
    }

    start () {
        
    }

    initAudioData(){
        // SceneMediator.getInstance().initAudio(this.audio);
    }

    initModelData(): void{
        Model.getInstance().scoreRecord = new Array<number>();
    }

    initUiEvents(): void{
        this.startBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoPlayScene();
        })
    }
}
