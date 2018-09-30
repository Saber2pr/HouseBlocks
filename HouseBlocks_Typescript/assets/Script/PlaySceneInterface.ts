export default interface PlaySceneInterface {
    /**
     * 初始化工厂
     */
    initFactorys(): void;
    /**
     * 初始化UI事件监听
     */
    initUiEvents(): void;
    /**
     * 初始化触摸事件监听
     */
    initTouchEvents(): void;
}