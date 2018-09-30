/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:19:52 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2018-09-30 20:19:52 
 */
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