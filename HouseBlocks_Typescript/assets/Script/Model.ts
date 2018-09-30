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

class Model {
    private _score: number;
    private _houseGroup: Array<any>;
    set score(score: number){
        this._score = score
    }
    get score(){
        return this._score
    }
    set houseGroup(array: Array<any>){
        this._houseGroup = array
    }
    get houseGroup(){
        return this._houseGroup
    }
}