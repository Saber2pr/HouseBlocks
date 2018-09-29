import Singleton from './Singleton'
import SceneMediatorInterface from './SceneMediatorInterface'
/**
 * 管理交互的类
 */
export default class SceneMediator extends Singleton implements SceneMediatorInterface{
    gotoStartScene(): void{
        cc.director.loadScene("StartScene")
    }
    gotoPlayScene(): void{
        cc.director.loadScene("PlayScene");
    }
    gotoOverScene(): void{
        cc.director.loadScene("OverScene");
    }
}