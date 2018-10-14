#pragma once
#include "cocos2d.h"
USING_NS_CC;

/************************************************************************/
/* 单例类管理场景交互                                                                     */
/************************************************************************/
class SceneMediator 
{
protected:
	static SceneMediator* _instance;
public:
	void gotoStartScene();
	void gotoPlayScene();
	static SceneMediator* getInstance();
};