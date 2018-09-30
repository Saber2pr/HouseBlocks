const {ccclass, property} = cc._decorator;
import SceneMediator from './SceneMediator'

@ccclass
export default class PlayScene extends cc.Component {

    @property(cc.Button)
    backBtn: cc.Button = null;
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.backBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoStartScene()
        })
    }

    // update (dt) {}
}
