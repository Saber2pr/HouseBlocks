/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:19:58 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 21:08:16
 */
const {ccclass} = cc._decorator;
import Model from './Model'
/**
 *ViewController
 *
 * @export
 * @class House
 * @extends {cc.Component}
 */
@ccclass
export default class House extends cc.Component {
    onBeginContact(contact): void{
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        this.node.dispatchEvent(
            new cc.Event.EventCustom("scoreUp", true)
        );
        if(points[0].y > cc.winSize.height / 4){
            this.node.dispatchEvent(
                new cc.Event.EventCustom("bottomDown", true)
            );
            this.node.dispatchEvent(
                new cc.Event.EventCustom("dark", true)
            )
        }
        let minY = Model.getInstance().houseSize.height
        if(Model.getInstance().houseGroup.length>1 && points[0].y < minY){
            this.node.dispatchEvent(
                new cc.Event.EventCustom("gameover", true)
            )
        }
    }
}
