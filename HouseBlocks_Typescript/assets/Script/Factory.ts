import FactoryInterface from './FactoryInterface'

export default class Factory implements FactoryInterface {
    private _repository: Array<any>;
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
    import(stuff: any, size: number): boolean{
        this._stuff = stuff;
        this._size = size;
        return true
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
