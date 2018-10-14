/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:25 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-09-30 22:40:27
 */
/**
 * 类SceneMediator的接口
 */
export default interface SceneMediatorInterface {
    // /**
    //  * 初始化音效资源
    //  * @param audio 
    //  */
    // initAudio(audio: cc.AudioClip): void
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