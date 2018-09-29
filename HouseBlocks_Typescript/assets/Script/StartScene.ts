const {ccclass, property} = cc._decorator;
import SceneMediator from './SceneMediator'

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button)
    startBtn: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.startBtn.node.on('click', ()=>{
            SceneMediator.getInstance().gotoPlayScene()
        })
    }

    // update (dt) {}
}
