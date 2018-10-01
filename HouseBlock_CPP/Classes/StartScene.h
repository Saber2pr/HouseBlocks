#pragma once
#include "cocos2d.h"
#include "ui/CocosGUI.h"
#include "SceneInterface.h"
#include <vector>
USING_NS_CC;

class StartScene: public cocos2d::Scene, SceneInterface
{
private:
	Size _size;
	Sprite* _background = nullptr;
	Label* _title = nullptr;
	ui::Button* _startBtn = nullptr;
public:
	StartScene();
	~StartScene();
	CREATE_FUNC(StartScene);
	static Scene* createScene();
	virtual bool init();
	bool initView();
	bool initUI();
	bool initTouchEvent();
	bool initModel();
};

