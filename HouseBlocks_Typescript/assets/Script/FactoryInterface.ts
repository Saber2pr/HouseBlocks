export default interface FactoryInterface {
    /**
     *进口一定数量的资源
     *
     * @param {*} stuff
     * @param {number} size
     * @memberof FactoryInterface
     */
    import(stuff: any, size: number): void;
    /**
     *出口产品
     *
     * @returns {*}
     * @memberof FactoryInterface
     */
    export(): any;
}