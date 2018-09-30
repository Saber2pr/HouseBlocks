/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:10 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2018-09-30 20:20:10 
 */
const {ccclass, property} = cc._decorator;
import {OverSceneInterface} from './SceneInterface'
import SceneMediator from './SceneMediator'

@ccclass
export default class OverScene extends cc.Component implements OverSceneInterface {
    
    @property(cc.Button)
    restartBtn: cc.Button = null;

    onLoad () {
        this.initUiEvents()
    }

    start () {
        
    }

    initUiEvents(): void{
        this.restartBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoPlayScene()
        })
    }

}
