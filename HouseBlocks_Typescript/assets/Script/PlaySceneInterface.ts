export default interface PlaySceneInterface {
    /**
     *初始化工厂
     *
     * @memberof PlaySceneInterface
     */
    initFactorys(): void;
    /**
     *初始化UI事件监听
     *
     * @memberof PlaySceneInterface
     */
    initUiEvents(): void;
    /**
     *初始化触摸事件监听
     *
     * @memberof PlaySceneInterface
     */
    initTouchEvents(): void;
    /**
     *添加房子
     *
     * @memberof PlaySceneInterface
     */
    addHouse(): void;
}