const {ccclass, property} = cc._decorator;
import HouseFactoryInterface from './HouseFactoryInterface'

@ccclass
export default class House extends cc.Component implements HouseFactoryInterface{
    
    private housePrefab: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:
    /**
     * 
     */
    initPool(){

    }


}
