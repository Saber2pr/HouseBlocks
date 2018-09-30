/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:21 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 22:21:12
 */
import SceneMediatorInterface from './SceneMediatorInterface'

/**
 *单例类
 *
 * @class Singleton
 */
export default class Singleton {
    static _instance: SceneMediator;
    /**
     *获取静态实例
     *
     * @static
     * @returns {SceneMediator}
     * @memberof Singleton
     */
    static getInstance(): SceneMediator {
        if(this._instance === undefined){
            this._instance = new SceneMediator();
            return this._instance;
        }else{
            return this._instance;
        }
    }
}
/**
 *管理场景切换的类
 *
 * @export
 * @class SceneMediator
 * @extends {Singleton}
 * @implements {SceneMediatorInterface}
 */
class SceneMediator implements SceneMediatorInterface {
    private _audio: cc.AudioClip = null;
    initAudio(audio: cc.AudioClip): void{
        this._audio = audio;
    }
    /**
     *### creator版本：1.9.3
     *> 官方bug在js文件里可以用，在typescript里报错
     *
     * ```js
     * //有跨域问题
     * cc.audioEngine.play(filePath: string, loop: boolean, volume: number)
     * //应该是：
     * cc.audioEngine.play(audio: cc.AudioClip, loop: boolean, volume: number)
     * ```
     * @param {cc.AudioClip} audio
     * @memberof SceneMediator
     */
    playAudio(audio?: cc.AudioClip): void{
        if(this._audio===null){
            //这里编辑器会提示参数错误，不过没关系。
            this._audio = audio;
            cc.audioEngine.play(this._audio, false, 1);
        }else{
            this._audio = cc.audioEngine.play(this._audio, false, 1);
        }
    }
    gotoStartScene(): void{
        this.playAudio();
        cc.director.loadScene("StartScene");
    }
    gotoPlayScene(): void{
        this.playAudio();
        cc.director.loadScene("PlayScene");
    }
    gotoOverScene(): void{
        this.playAudio();
        cc.director.loadScene("OverScene");
    }
}