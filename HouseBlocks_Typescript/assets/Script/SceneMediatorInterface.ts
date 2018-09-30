/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:25 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2018-09-30 20:20:25 
 */
/**
 * 类SceneMediator的接口
 */
export default interface SceneMediatorInterface {
    /**
     * 加载开始场景
     */
    gotoStartScene(): void;
    /**
     * 加载游戏场景
     */
    gotoPlayScene(): void;
    /**
     * 加载结束场景
     */
    gotoOverScene(): void;
}