import FactoryInterface from './FactoryInterface'

export default class Factory implements FactoryInterface{
    private _repository: Array<any>;
    private _stuff: any;
    private _size: number;
    private _recover(): void{
        for(let i: number = 0; i < this._size; i++){
            this._repository.push(this._stuff);
        }
    }
    import(stuff: any, size: number): void{
        this._stuff = stuff;
        this._size = size;
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
