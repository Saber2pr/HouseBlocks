/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:10 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 21:03:38
 */
const { ccclass, property } = cc._decorator
import { OverSceneInterface } from './IScene'
import SceneMediator from './SceneMediator'
import Model from './Model'

@ccclass
export default class OverScene extends cc.Component
  implements OverSceneInterface {
  @property(cc.Button)
  restartBtn: cc.Button = null
  @property(cc.Label)
  scoreLabel: cc.Label = null
  @property(cc.Label)
  hightScoreLabel: cc.Label = null

  onLoad() {
    this.initModelData()
    this.initView()
    this.initUiEvents()
  }

  start() {}

  initModelData(): void {
    Model.getInstance().scoreRecord.push(Model.getInstance().score)
  }

  initView(): void {
    this.scoreLabel.string = Model.getInstance().score.toString()
    this.hightScoreLabel.string = Math.max.apply(
      null,
      Model.getInstance().scoreRecord
    )
  }

  initUiEvents(): void {
    this.restartBtn.node.on('click', () => {
      SceneMediator.getInstance().gotoPlayScene()
    })
  }
}
