# 使用Typescript编写cocos代码
> 1. 可以更加容易的创建静态变量
```js
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
```
> 2. 可以实现接口
```js
import FactoryInterface from './FactoryInterface'
/**
 *Factory
 *
 * @export
 * @class Factory
 * @implements {FactoryInterface}
 */
export default class Factory implements FactoryInterface {
    private _repository: Array<any> = [];
    private _stuff: any;
    private _size: number;
    private _recover(): void{
        for(let i: number = 0; i < this._size; i++){
            this._repository.push(this._stuff);
        }
    }
    constructor(stuff: any, size: number){
        this.import(stuff, size)
    }
    import(stuff: any, size: number): void{
        this._stuff = stuff;
        this._size = size;
        this._recover()
    }
    export(): any{
        if (this._repository.length > 0) {
            return this._repository.pop();
        }else{
            this._recover();
            return this._repository.pop();
        }
    }
}
```
