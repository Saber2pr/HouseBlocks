/**
 *单例类
 *
 * @class Singleton
 */
export default class Singleton {
    static _instance: Model;
    /**
     *获取静态实例
     *
     * @static
     * @returns {Model}
     * @memberof Singleton
     */
    static getInstance(): Model {
        if(this._instance === undefined){
            this._instance = new Model();
            return this._instance;
        }else{
            return this._instance;
        }
    }
}
/**
 *Model
 *
 * @class Model
 */
class Model {
    private _score: number;
    private _houseGroup: Array<cc.Node>;
    private _groundHeight: number;
    private _houseSize: cc.Size;
    set score(score: number){
        this._score = score;
    }
    get score(){
        return this._score;
    }
    set houseGroup(array: Array<cc.Node>){
        this._houseGroup = array;
    }
    get houseGroup(){
        return this._houseGroup;
    }
    set groundHeight(height: number){
        this._groundHeight = height;
    }
    get groundHeight(){
        return this._groundHeight;
    }
    set houseSize(size: cc.Size){
        this._houseSize = size
    }
    get houseSize(){
        return this._houseSize
    }
}