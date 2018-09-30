/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:19:49 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 21:14:04
 * @Description: 这是个额外的模块，暂时还没用到。
 */
import FactoryInterface from './FactoryInterface'

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
