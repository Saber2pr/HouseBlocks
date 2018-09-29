/**
 * 单例类
 */
export default class Singleton {
    static _instance: Singleton;
    /**
     * 获取静态实例
     */
    static getInstance(): Singleton {
        if(this._instance === undefined){
            this._instance = new Singleton();
            return this._instance;
        }else{
            return this._instance;
        }
    }
}