#pragma once
#include "cocos2d.h"
#include "ui/CocosGUI.h"
#include "SceneInterface.h"

USING_NS_CC;

class PlayScene : public cocos2d::Scene, SceneInterface
{
private:
	Size _size;
	Sprite* _background = nullptr;
	Label* _score = nullptr;
	ui::Button* _backBtn = nullptr;
public:
	CREATE_FUNC(PlayScene);
	static Scene* createScene();
	virtual bool init();
	bool initView();
	bool initUI();
};