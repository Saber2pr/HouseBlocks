/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:21 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 22:35:11
 */
/**
 *单例类
 *
 * @class Singleton
 */
export default class Singleton {
  static _instance: SceneMediator
  /**
   *获取静态实例
   *
   * @static
   * @returns {SceneMediator}
   * @memberof Singleton
   */
  static getInstance(): SceneMediator {
    if (this._instance === undefined) {
      this._instance = new SceneMediator()
      return this._instance
    } else {
      return this._instance
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
class SceneMediator {
  // private _audio: cc.AudioClip = null;
  // initAudio(audio: cc.AudioClip): void{
  //     this._audio = audio;
  // }
  // playAudio(audio?: cc.AudioClip): void{
  //     if(this._audio===null){
  //         this._audio = audio;
  //         cc.audioEngine.play(this._audio, false, 1);
  //     }else{
  //         this._audio = cc.audioEngine.play(this._audio, false, 1);
  //     }
  // }
  gotoStartScene(): void {
    // this.playAudio();
    cc.director.loadScene('StartScene')
  }
  gotoPlayScene(): void {
    // this.playAudio();
    cc.director.loadScene('PlayScene')
  }
  gotoOverScene(): void {
    // this.playAudio();
    cc.director.loadScene('OverScene')
  }
}
