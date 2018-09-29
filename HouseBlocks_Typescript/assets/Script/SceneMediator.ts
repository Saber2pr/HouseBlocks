import SceneMediatorInterface from './SceneMediatorInterface'
/**
 * 管理交互的类
 */
export default class SceneMediator implements SceneMediatorInterface{
    static _instance: SceneMediator;
    /**
     * 获取静态实例
     */
    static getInstance(): SceneMediator {
        if(this._instance === undefined){
            this._instance = new SceneMediator();
            return this._instance;
        }else{
            return this._instance;
        }
    }
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