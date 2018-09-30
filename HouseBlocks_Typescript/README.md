# hello-world
Hello world new project template.
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
