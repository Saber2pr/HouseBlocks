/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:05:46 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 22:17:01
 */
/**
 *SceneInterface
 *
 * @interface SceneInterface
 */
export default interface SceneInterface {
    /**
     *初始化工厂
     *
     * @memberof SceneInterface
     */
    initFactorys?(): void;
    /**
     *初始化Model数据
     *
     * @memberof SceneInterface
     */
    initModelData?(): void;
    /**
     *初始化音效数据
     *
     * @memberof SceneInterface
     */
    initAudioData?(): void;
    /**
     *初始化视图
     *
     * @memberof SceneInterface
     */
    initView?(): void;
    /**
     *初始化UI事件监听
     *
     * @memberof SceneInterface
     */
    initUiEvents?(): void;
    /**
     *初始化触摸事件监听
     *
     * @memberof SceneInterface
     */
    initTouchEvents?(): void;
    /**
     *初始化自定义事件监听
     *
     * @memberof SceneInterface
     */
    initCustomEvent?(): void;
    /**
     *初始化物理
     *
     * @memberof SceneInterface
     */
    initPhysics?(): void;
    /**
     *初始化数组
     *
     * @memberof SceneInterface
     */
    initArray?(): void;
}
/**
 *StartSceneInterface
 *
 * @export
 * @interface StartSceneInterface
 * @extends {SceneInterface}
 */
export interface StartSceneInterface extends SceneInterface {

}
/**
 *PlaySceneInterface
 *
 * @interface PlaySceneInterface
 * @extends {SceneInterface}
 */
export interface PlaySceneInterface extends SceneInterface {
    /**
     *添加房子
     *
     * @memberof PlaySceneInterface
     */
    addHouse(): void;
}
/**
 *OverSceneInterface
 *
 * @export
 * @interface OverSceneInterface
 * @extends {SceneInterface}
 */
export interface OverSceneInterface extends SceneInterface {
    
}