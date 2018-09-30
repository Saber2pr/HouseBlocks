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
        cc.log(points[0].y, minY)
        if(Model.getInstance().houseGroup.length>0 && points[0].y < minY){
            this.node.dispatchEvent(
                new cc.Event.EventCustom("gameover", true)
            )
        }
    }
}
